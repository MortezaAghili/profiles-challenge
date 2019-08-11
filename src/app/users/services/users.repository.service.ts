import { Injectable } from '@angular/core';

// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

// model
import { User } from '../models/user.model';

@Injectable()
export class UsersRepositoryService {
  private endpoint = 'api/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint)
      .pipe(
        tap(_ => console.log(`fetched Users list`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`fetched user info with id=${id}`)),
      catchError(this.handleError<User>(`get user id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
