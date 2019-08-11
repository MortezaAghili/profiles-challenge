import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Material components!
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from "@angular/material/sort";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { appRoutes } from "./routes";
import { UsersModule } from './users/users.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    UsersModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule
  ],
  declarations: [
    AppComponent,
    UsersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
