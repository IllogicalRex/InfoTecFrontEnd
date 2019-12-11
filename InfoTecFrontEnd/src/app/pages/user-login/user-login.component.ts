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
  public error: string;
  isUnauthorized = false;
  userType: string;
  tokenInfo: any;
  constructor(public userLogin: AuthGardService,  public router: Router) {
    this.tokenInfo = JSON.parse(localStorage.getItem('token'));
    this.userType = 'Alumno';
   }

  ngOnInit() {
  }

  Login() {
    console.log(this.userType);
    if ( this.userType === 'Alumno' ) {
      this.userLogin.LoginUserAlumn(this.user).subscribe((res: any) => {
        this.isAutenticated();
        this.router.navigate(['/user']);
        return;
      });
    } else if ( this.userType === 'Asesor' ) {
      this.userLogin.LoginUserAsesor(this.user).subscribe((res: any) => {
        this.isAutenticated();
        this.router.navigate(['/user']);
        return;
      });
    } else if ( this.userType === 'Encargado de residencias' ) {
      this.userLogin.LoginUserEncargado(this.user).subscribe((res: any) => {
        this.isAutenticated();
        this.router.navigate(['/user']);
        return;
      });
    }

  }

  isAutenticated() {
    /* if (this.tokenInfo.token !== 'Unauthorized' && this.tokenInfo.token.length > 15) { */
      if (!this.tokenInfo.userName) {
      this.isUnauthorized = true;
    } else {
      this.isUnauthorized = false;
      return;
    }
  }
  typeUser(event) {
    console.log(this.userType);
  }

  validated(val: boolean) {
    this.isUnauthorized = val;
  }
}
