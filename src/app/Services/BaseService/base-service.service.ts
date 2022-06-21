import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from 'src/app/Interfaces/Response/baseResponse.interfase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseServiceService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string): Promise<BaseResponse<T> | undefined> {
    return this.http.get<BaseResponse<T>>(this.baseUrl + url).toPromise();
  }

  post<T, R>(url: string, request: R): Promise<BaseResponse<T> | undefined> {
    return this.http
      .post<BaseResponse<T>>(this.baseUrl + url, request)
      .toPromise();
  }

  put<T, R>(url: string, request: R): Promise<BaseResponse<T> | undefined> {
    return this.http
      .put<BaseResponse<T>>(this.baseUrl + url, request)
      .toPromise();
  }

  delete<t>(url: string): Promise<BaseResponse<t> | undefined> {
    return this.http.delete<BaseResponse<t>>(this.baseUrl + url).toPromise();
  }
}
