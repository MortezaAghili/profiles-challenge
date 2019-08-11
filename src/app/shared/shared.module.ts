import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryUsersDataService } from '../users/services/in-memory-users-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersDataService)
  ],
  declarations: [ ],
  exports: [
    CommonModule,
  ],
  providers: [ ]
})
export class SharedModule { }
