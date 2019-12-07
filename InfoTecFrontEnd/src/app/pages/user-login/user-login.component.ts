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
  isUnauthorized: boolean;
  userType: string;
  tokenInfo: any;
  constructor(public userLogin: AuthGardService,  public router: Router) {
    this.tokenInfo = JSON.parse(localStorage.getItem('token'));
    this.userType = 'alumno';
   }

  ngOnInit() {
  }

  Login() {
    console.log('token2', this.tokenInfo);
    if ( this.userType === 'alumno' ) {
      console.log('entre alumno', this.tokenInfo);
      this.userLogin.LoginUserAlumn(this.user).subscribe((res: any) => {
        this.router.navigate(['/user']);
        return;
      });
    } else if ( this.userType === 'asesor' ) {
      console.log('entre Asesor', this.tokenInfo);
      this.userLogin.LoginUserAsesor(this.user).subscribe((res: any) => {
        this.router.navigate(['/user']);
        return;
      });
    } else if ( this.userType === 'encargado' ) {
      this.userLogin.LoginUserEncargado(this.user).subscribe((res: any) => {
        this.router.navigate(['/user']);
        return;
      });
    }
    if (this.tokenInfo.token === 'Unauthorized') {
      this.isUnauthorized = true;
    } else {
      this.isUnauthorized = false;
    }

  }

  typeUser(event) {
    this.userType = event;
    console.log(event);
  }
}
