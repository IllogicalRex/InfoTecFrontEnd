import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGardService } from '../services/auth-gard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(public authService: AuthGardService, public router: Router) {
  }
  canActivate() {
    if (this.authService.isLoged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
