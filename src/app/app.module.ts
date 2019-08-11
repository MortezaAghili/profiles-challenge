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
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { appRoutes } from "./routes";
import { UsersModule } from './users/users.module';
import { UserDetailModule } from './user-detail/user-detail.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    UsersModule,
    UserDetailModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
