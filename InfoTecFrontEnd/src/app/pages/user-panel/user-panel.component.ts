import { Component, OnInit } from '@angular/core';
import { AlumnService } from '../../services/alumn.service';
import { AlumnModel } from '../models/alumn.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {


  alumn: AlumnModel = new AlumnModel();
  spiner = true;
  config = JSON.parse(localStorage.getItem('token'));
  constructor(public alumnService: AlumnService) {
    this.alumn.nombreProyecto = 'vacio';
  }
  
  ngOnInit() {
    this.getAlumn();
  }

  getAlumn() {
    this.spiner = true;
    this.spiner = false;
    this.alumnService.getAlumno(String(this.config.userName)).subscribe((res: AlumnModel) => {
      if (res) {
        this.alumn = res;
        localStorage.setItem('token', JSON.stringify({
          token: this.config.token,
          user: this.config.user,
          userName: this.config.userName,
           subscriptionStatus: res.nombreProyecto
          }));
      }
    });
  }

}
