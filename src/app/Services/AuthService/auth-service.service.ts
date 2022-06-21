import { Injectable } from '@angular/core';
import { BaseServiceService } from '../BaseService/base-service.service';
import { loginRequest } from '../../Interfaces/Request/Auth.interface';
import { loginResponse } from 'src/app/Interfaces/Response/Auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private BaseService: BaseServiceService) {}

  login(request: loginRequest) {
    return this.BaseService.post<loginResponse, loginRequest>('auth', request);
  }
}
