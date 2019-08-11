import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { appRoutes } from "./routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    UsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
