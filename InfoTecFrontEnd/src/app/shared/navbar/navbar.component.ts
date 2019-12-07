import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    // localStorage.removeItem('token');
    localStorage.setItem('token', JSON.stringify({token: 'Unauthorized'}));
    this.router.navigate(['/login']);
  }
}
