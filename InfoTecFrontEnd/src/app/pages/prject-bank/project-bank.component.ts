import { Component, OnInit } from '@angular/core';
import { ProjectBankModel } from '../models/project-bank.model';
import { PrjectBankService } from 'src/app/services/ProjectBank.service';
import { ProjectModel } from '../models/project-model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-bank',
  templateUrl: './project-bank.component.html',
  styleUrls: ['./project-bank.component.css']
})
export class ProjectBankComponent implements OnInit {
  projectBank: ProjectBankModel [] = [];
  projectRes: ProjectModel = new ProjectModel();
  spiner = true;
  isEnabled = true;
  config = JSON.parse(localStorage.getItem('token'));

  constructor(public projectBankService: PrjectBankService,
              public router: Router) { }

  ngOnInit() {
    if (this.config.subscriptionStatus !== 'vacio' && this.config.user === 'Alumno') {
      Swal.fire(
        'Ya cuentas con un proyecto asignado',
        'No puedes seleccionar otro proyecto, solo podrás ver los proyectos disponibles.',
        'warning'
      );
      this.isEnabled = false;
    }
    this.getProjectsBank();
  }

  getProjectsBank() {
    this.spiner = true;
    this.projectBankService.getPrjectBank().subscribe((response: ProjectBankModel[]) => {
      this.spiner = false;
      this.projectBank = response;
  });
  }

  projectSubscription(projectB: ProjectBankModel) {
    console.log(projectB);
    
    let project: ProjectModel = {
      IdBproy: Number(projectB.idBproy),
      nombre_proy: projectB.nombre_proy,
      descripcion_proy: 'sin descripcion',
      NoControl: String(this.config.userName)
    };
    this.projectBankService.projectSubscription(project).subscribe((res: ProjectModel) => {
      this.projectRes = res;
      if (res) {
        Swal.fire(
          'Subscripcion exitosa',
          '',
          'success'
        );
        this.router.navigate(['/user']);
      } else {
        Swal.fire(
          'Subscripción fallida',
          'No cuentas con los créditos suficientes para subscribirte a un proyecto',
          'error'
        );
      }
     // this.ngOnInit();
    });

  }
}
