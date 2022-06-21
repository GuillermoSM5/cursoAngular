import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Interfaces/Response/users.interface';
import { ClientServiceService } from 'src/app/Services/ClientService/client-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'lastName', 'secondLastName', 'email'];

  constructor(private getUser: ClientServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();

    // dataSource = this.users;
  }

  async getUsers() {
    const response = await this.getUser.getClients();
    if (response?.data !== undefined) {
      this.users = response.data;
    }
    return;
  }
  goToUser(user: any) {
    this.getUser.addUser(user);
    this.router.navigate(['/bookshop/detail-user', user.id]);
  }
}
