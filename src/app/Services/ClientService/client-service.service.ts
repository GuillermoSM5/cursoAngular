import { Injectable } from '@angular/core';
import { modifyUser } from 'src/app/Interfaces/Request/Client.interface';
import { NewUser, User } from 'src/app/Interfaces/Response/users.interface';

import { BaseServiceService } from '../BaseService/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class ClientServiceService {
  private user: any[] = [];

  constructor(private BaseService: BaseServiceService) {}

  getClients() {
    return this.BaseService.get<User[]>('users');
  }

  registerClient(user: NewUser) {
    return this.BaseService.post<boolean, NewUser>('users/register', user);
  }

  modifyClient(user: modifyUser, id: string) {
    return this.BaseService.put<boolean, modifyUser>(`users/${id}`, user);
  }

  deleteUser(id: string) {
    return this.BaseService.delete<boolean>(`users/deactivate/${id}`);
  }

  changePassword(user: any) {
    return this.BaseService.post<any, any>(`users/changePassword`, user);
  }

  addUser(user: any) {
    this.user = [user];
  }

  public get getClient() {
    return this.user[0];
  }
}
