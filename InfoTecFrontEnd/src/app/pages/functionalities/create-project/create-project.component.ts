import { Component, OnInit } from '@angular/core';
import { ProjectBankModel } from '../../models/project-bank.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {


  project: ProjectBankModel = new ProjectBankModel ();

  constructor() { }

  ngOnInit() {
  }

  SaveResource(f: any) {

  }

}
