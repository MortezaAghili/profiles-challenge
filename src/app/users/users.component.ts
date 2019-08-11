import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs/internal/Subscription";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { UsersRepositoryService } from './services/users.repository.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private subscription: Subscription;

  displayedColumns: string[] = [
    "photo",
    "id",
    "email",
    "first_name",
    "phone",
    "address",
    "modified",
    "view"
  ];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private usersRepoService: UsersRepositoryService) {}

  ngOnInit() {
    this.subscription = this.usersRepoService.getUsers()
      .subscribe(users => {
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
