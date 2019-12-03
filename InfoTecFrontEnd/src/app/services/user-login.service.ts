import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


    public URL = 'https://localhost:44344/api/';


  constructor(public userLoginService: HttpClient) { }

  getLogin() {
    return this.userLoginService.post(this.URL + 'login', {});
  }

}
