import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isUserLoggedIn = new Subject<boolean>();
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  updateIsUserLoggedIn(flag: boolean){
    this.isUserLoggedIn.next(flag);
  }

  verifyUser(username: string, password: string): Observable<IUser> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users =>
        users.find(user => user.username === username && user.password === password)
      )
    );
  }
}
