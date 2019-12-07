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
  projectRes: ProjectModel;

  constructor(public projectBankService: PrjectBankService,
              public router: Router) { }

  ngOnInit() {
    this.getProjectsBank();
  }

  getProjectsBank() {
    this.projectBankService.getPrjectBank().subscribe((response: ProjectBankModel[]) => {
      this.projectBank = response;
  });
  }

  projectSubscription(projectB: ProjectBankModel) {
    let config = JSON.parse(localStorage.getItem('token'));
    let project: ProjectModel = {
      IdBproy: Number(projectB.idBproy),
      nombre_proy: projectB.nombre_proy,
      descripcion_proy: 'sin descripcion',
      NoControl: String(config.userName)
    };
    this.projectBankService.projectSubscription(project).subscribe((res: ProjectModel) => {
      this.projectRes = res;
      Swal.fire(
        'Subscripcion exitosa',
        '',
        'success'
      );
      this.router.navigate(['/user']);
     // this.ngOnInit();
    });

  }


  // event(event) {
  //   console.log(event.target.files);
  //   let file = event.target.files[0];
  //   let x: string = String(file.name).split('.')[0];
  //   let blob = new Blob([event.target.files[0]], {type: file.type});
  //   console.log(blob);
  //   if (window.navigator.msSaveOrOpenBlob) {
  //       window.navigator.msSaveBlob(blob, x + 'test');
  //   } else {
  //       let elem = window.document.createElement('a');
  //       elem.href = window.URL.createObjectURL(blob);
  //       elem.download = x + 'test';
  //       document.body.appendChild(elem);
  //       elem.click();
  //       document.body.removeChild(elem);
  //   }
  // }  
  
}
