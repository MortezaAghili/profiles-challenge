import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/internal/Subscription";

import { User } from '../users/models/user.model';
import { UsersRepositoryService } from '../users/services/users.repository.service';
import { FadeIn } from '../shared/animations';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [FadeIn]
})
export class UserDetailComponent implements OnInit {
  user: User = null;
  error: string = null;
  private subscription: Subscription;

  constructor(
    private usersRepoService: UsersRepositoryService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.getUserDetail(+id);
  }

  getUserDetail(id: number) {
    this.subscription = this.usersRepoService.getUserById(id)
    .subscribe(
      data => this.user = data,
      err => this.error = err
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
