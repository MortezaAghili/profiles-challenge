import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { UsersRepositoryService } from "../users/services/users.repository.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule
  ],
  declarations: [],
  exports: [],
  providers: [HttpClientModule, UsersRepositoryService]
})
export class UserDetailModule {}
