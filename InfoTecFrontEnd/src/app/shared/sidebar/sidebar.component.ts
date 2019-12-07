import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tokenInfo: any;
  user: string;
  constructor() { 
    this.tokenInfo = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit() {
    this.user = this.tokenInfo.user;
  }

}
