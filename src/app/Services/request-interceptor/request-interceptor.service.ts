import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { catchError, Observable, tap, throwError } from 'rxjs';
import { StorageServiceService } from '../storageService/storage-service.service';
import { AlertserviceService } from '../alertService/alertservice.service';

@Injectable({
  providedIn: 'root',
})
export class RequestInterceptorService implements HttpInterceptor {
  constructor(
    private storageService: StorageServiceService,
    private alertService: AlertserviceService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const session = this.storageService.getSession();
    let headers: HttpHeaders = new HttpHeaders({});
    if (session?.token) {
      headers = new HttpHeaders({
        Authorization: `Bearer ${session?.token}` || '',
        userId: `${session?.user.id}`,
      });
    }

    const reqClone = request.clone({
      headers,
    });

    return next.handle(reqClone).pipe(
      tap((res) => {
        if (res instanceof HttpResponse && session?.token) {
          const newtkn = res.headers.get('Authorization');
          session.token = newtkn || session.token || '';
          this.storageService.setSession(session);
        }
        if (res instanceof HttpResponse && res.body.responseCode === 1) {
          this.catchIntercept({
            handle: true,
            message: res.body.description,
          });
        }
        return res;
      }),
      catchError((err) => this.catchIntercept(err))
    );
  }

  catchIntercept(error: any): Observable<any> {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.alertService.error(
          error.error.message ||
            'Tu sesión llevaba mucho tiempo inactiva. Por seguridad, la hemos cerrado.'
        );
      }
      if (error.status === 400) {
        this.alertService.error(
          error.status === 400
            ? error.error.message ||
                'Tu sesión llevaba mucho tiempo inactiva. Por seguridad, la hemos cerrado.'
            : 'Hubo un error inesperado, intente más tarde'
        );
      }
      if (error.status === 401) this.storageService.closeSession(true);
      if (error.status === 404) console.log(error.message);
    }
    if (error.handle) {
      this.alertService.error(
        error.message || 'Hubo un error inesperado, intente más tarde'
      );
    }

    return throwError(error);
  }
}
