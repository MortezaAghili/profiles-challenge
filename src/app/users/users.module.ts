import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UsersRepositoryService } from './services/users.repository.service';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailComponent }
    ]),
   ],
  declarations: [
  ],
  exports: [ ],
  providers: [
    HttpClientModule,
    UsersRepositoryService
  ]
})

export class UsersModule { }