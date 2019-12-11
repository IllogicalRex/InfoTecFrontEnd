import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../pages/models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService {

  public URL = 'https://localhost:44344/api/';
  token: any;

  constructor(public http: HttpClient) { }

  getLogin() {
    return this.http.post(this.URL + 'login/auth', {});
  }

  isLoged() {
    let tokenInfo = JSON.parse(localStorage.getItem('token'));
    if (tokenInfo.token === null || tokenInfo.token === 'Unauthorized' ) {
      return false;
    } else if (tokenInfo.token !== 'Unauthorized') {
      return true;
    }
   // return ( this.token.length > 5 ) ? true : false;
  }

  LoginUserAlumn(user: UserModel) {
    return this.http.post(this.URL + 'login/authalumn', user)
    // tslint:disable-next-line:no-shadowed-variable
    .pipe(map(user => {
      console.log('asdfasdfdf', user);
      localStorage.setItem('token', JSON.stringify(user));
    }));
  }

  LoginUserAsesor(user: UserModel) {
    return this.http.post(this.URL + 'login/authasesor', user)
    // tslint:disable-next-line:no-shadowed-variable
    .pipe(map(user => {
      console.log('asdfasdfdf', user);
      localStorage.setItem('token', JSON.stringify(user));
    }));
  }

  LoginUserEncargado(user: UserModel) {
    return this.http.post(this.URL + 'login/authencargado', user)
    // tslint:disable-next-line:no-shadowed-variable
    .pipe(map(user => {
      console.log('asdfasdfdf', user);
      localStorage.setItem('token', JSON.stringify(user));
    }));
  }
}
