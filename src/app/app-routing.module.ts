import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
  {
    path: '',
    // component: PublicComponent,
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'bookshop',
    // component: PrivateComponent,
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
