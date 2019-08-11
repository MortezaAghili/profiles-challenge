import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/internal/Subscription";

import { UsersRepositoryService } from './services/users.repository.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private subscription: Subscription;

  constructor(private usersRepoService: UsersRepositoryService) {}

  ngOnInit() {
    this.subscription = this.usersRepoService.getUsers()
    .subscribe(users => {
      console.table(users);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
