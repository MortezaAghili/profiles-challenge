import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule'},
];
