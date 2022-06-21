import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginResponse } from 'src/app/Interfaces/Response/Auth.interface';
import { AuthServiceService } from '../AuthService/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  private _sessionRef = 'Proyect-Angular';

  constructor(
    private loginService: AuthServiceService,
    private router: Router
  ) {}

  setSession(session: loginResponse | undefined): void {
    localStorage.setItem(this._sessionRef, JSON.stringify(session));
  }

  getSession(): loginResponse | undefined {
    const session = localStorage.getItem(this._sessionRef) || undefined;
    if (!session) {
      return undefined;
    }
    return JSON.parse(session) as loginResponse;
  }

  async closeSession(unauthorized = false): Promise<void> {
    const session = this.getSession();
    if (session && !unauthorized) {
      // await this.loginService.logout({
      //   userId: session.userId,
      // });
    }
    localStorage.removeItem(this._sessionRef);
    this.router.navigate(['/login']);
  }
}
