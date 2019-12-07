import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InfoTecFrontEnd';

  token = localStorage.getItem('token');

  constructor(public router: Router) {
    if (this.token) {
      console.log('entre   ', this.token);
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
