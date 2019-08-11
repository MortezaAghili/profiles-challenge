import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersRepositoryService } from './users.repository.service';
import { userOne, userTwo } from './mockData';

describe('Users Service', () => {
  let httpTestingController: HttpTestingController;
  let service: UsersRepositoryService;

  const usersArr = [
    userOne,
    userTwo
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        UsersRepositoryService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UsersRepositoryService);
  });

  describe('getUsers', () => {
    it('should call get method to retrieve all users with the correct URL', () => {
      service.getUsers().subscribe(users => {
        expect(users[1].first_name).toEqual('Kata');
      });
      const req = httpTestingController.expectOne('api/users');
      req.flush(usersArr);
      httpTestingController.verify();
    });
  });

  describe('getUserById', () => {
    it('should call get method to retrieve the user detail with the correct URL', () => {
      service.getUserById(5).subscribe((data) => {
        expect(data.first_name).toEqual(usersArr[0].first_name);
      });

      const req = httpTestingController.expectOne('api/users/5');
      req.flush(usersArr[0]);
      httpTestingController.verify();
    });
  });
});
