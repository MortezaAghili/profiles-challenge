import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemoryUsersDataService } from "../users/services/in-memory-users-data.service";
import { LoadingSpinnerComponent } from "./loading-spinner.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryUsersDataService)
  ],
  declarations: [LoadingSpinnerComponent],
  exports: [CommonModule, LoadingSpinnerComponent],
  providers: []
})
export class SharedModule {}
