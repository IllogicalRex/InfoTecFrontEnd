import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../pages/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  public URL = 'https://localhost:44344/api/';
  token: string;

  constructor(public http: HttpClient) { }

  getLogin() {
    return this.http.post(this.URL + 'login', {});
  }

  isLoged() {
    this.token = localStorage.getItem('token');
    return ( this.token.length > 5 ) ? true : false;
  }

  LoginUser(user: UserModel) {
    return this.http.post(this.URL + 'login', user)
    // tslint:disable-next-line:no-shadowed-variable
    .pipe(map(user => {
      localStorage.setItem('token', JSON.stringify(user));
      return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}
