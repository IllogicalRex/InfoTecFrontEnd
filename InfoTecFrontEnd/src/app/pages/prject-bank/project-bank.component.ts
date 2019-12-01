import { Component, OnInit } from '@angular/core';
import { ProjectBankModel } from '../models/project-bank.model';
import { PrjectBankService } from 'src/app/services/ProjectBank.service';

@Component({
  selector: 'app-project-bank',
  templateUrl: './project-bank.component.html',
  styleUrls: ['./project-bank.component.css']
})
export class ProjectBankComponent implements OnInit {
  projectBank: ProjectBankModel [] = [];
  constructor(public projectBankService: PrjectBankService) { }

  ngOnInit() {
    this.projectBankService.getPrjectBank().subscribe((response: ProjectBankModel[]) => {
        this.projectBank = response;
        this.projectBank.forEach(elem => {
          elem.carrera = 'Ing en sistemas';
        });
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
