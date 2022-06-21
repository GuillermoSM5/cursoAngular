import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'client-list',
        component: UsersListComponent,
      },
      {
        path: 'register-user',
        component: RegisterUserComponent,
      },
      {
        path: 'detail-user/:id',
        component: DetailUserComponent,
      },
      {
        path: 'change-password/:id',
        component: ChangePasswordComponent,
      },
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
