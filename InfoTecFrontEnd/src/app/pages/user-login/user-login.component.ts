import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';
import { UserModel } from '../models/user.model';
import { AuthGardService } from '../../services/auth-gard.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: UserModel;

  constructor(public userLogin: AuthGardService) { }

  ngOnInit() {
  }

  login() {/* 
    this.userLogin.getLogin().subscribe((res: any) => {
      console.log('Logeado...');
    }); */
  }

  Login() {
    this.userLogin.LoginUser(this.user).subscribe((res: any) => {
      console.log('Logeado...');
    });
  }

  typeUser(event) {
    console.log(event);
  }
}
