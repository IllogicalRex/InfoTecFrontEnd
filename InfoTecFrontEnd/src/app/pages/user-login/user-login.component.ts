import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';
import { UserModel } from '../models/user.model';
import { AuthGardService } from '../../services/auth-gard.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public user: UserModel = new UserModel();

  constructor(public userLogin: AuthGardService,  public router: Router) {
   }

  ngOnInit() {
  }

  Login() {
    this.userLogin.LoginUser(this.user).subscribe((res: any) => {
      console.log('Logeado...', res);
      this.router.navigate(['/user']);
    });

  }

  typeUser(event) {
    console.log(event);
  }
}
