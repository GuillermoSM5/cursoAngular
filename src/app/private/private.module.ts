import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PrivateComponent } from './private.component';
import { MatTableModule } from '@angular/material/table';
import { UsersListComponent } from './users/users-list/users-list.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';

@NgModule({
  declarations: [
    NavBarComponent,
    PrivateComponent,
    UsersListComponent,
    RegisterUserComponent,
    DetailUserComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class PrivateModule {}
