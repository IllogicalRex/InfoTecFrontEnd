import { Component, OnInit } from '@angular/core';
import { AlumnService } from '../../services/alumn.service';
import { AlumnModel } from '../models/alumn.model';
import { AsesorService } from '../../services/asesor.service';
import { AsesorModel } from '../models/asesor.model';
import { EncargadoService } from '../../services/encargado.service';
import { EncargadoModel } from '../models/encargado.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {


  alumn: AlumnModel = new AlumnModel();
  asesor: AsesorModel = new AsesorModel();
  encargado: EncargadoModel = new EncargadoModel();
  spiner = true;
  config = JSON.parse(localStorage.getItem('token'));
  constructor(public alumnService: AlumnService,
              public asesorService: AsesorService,
              public encargadoService: EncargadoService) {
    this.alumn.nombreProyecto = 'vacio';
  }

  ngOnInit() {
    if (this.config.user === 'Alumno') {
      this.getAlumn();
    } else if (this.config.user === 'Asesor') {
      this.getAsesor();
    } else if (this.config.user === 'Encargado de residencias') {
      this.getEncargado();
    }
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

  getAsesor() {
    this.spiner = true;
    this.spiner = false;
    this.asesorService.getAsesor(String(this.config.userName)).subscribe((res: AsesorModel) => {
      if (res) {
        this.asesor = res;
        localStorage.setItem('token', JSON.stringify({
          token: this.config.token,
          user: this.config.user,
          userName: this.config.userName,
           subscriptionStatus: ''
          }));
      }
    });
  }

  getEncargado() {
    this.spiner = true;
    this.spiner = false;
    this.encargadoService.getEncargado(String(this.config.userName)).subscribe((res: EncargadoModel) => {
      if (res) {
        this.encargado = res;
        localStorage.setItem('token', JSON.stringify({
          token: this.config.token,
          user: this.config.user,
          userName: this.config.userName,
           subscriptionStatus: ''
          }));
      }
    });
  }

}
