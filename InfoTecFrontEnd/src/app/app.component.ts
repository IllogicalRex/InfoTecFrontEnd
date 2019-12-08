import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoTecFrontEnd';
  token: any;
  
  constructor(public router: Router) {
    this.token = JSON.parse(localStorage.getItem('token'));
    if (!this.token) {
      localStorage.setItem('token', JSON.stringify({ token: 'Unauthorized', user: '', userName: '' }));
    } else if (this.token.token.length > 15) {
      console.log('entre   ', this.token);
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
