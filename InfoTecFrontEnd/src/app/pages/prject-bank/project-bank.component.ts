import { Component, OnInit } from '@angular/core';
import { ProjectBankModel } from '../models/project-bank.model';

@Component({
  selector: 'app-project-bank',
  templateUrl: './project-bank.component.html',
  styleUrls: ['./project-bank.component.css']
})
export class ProjectBankComponent implements OnInit {
  projectBank: ProjectBankModel [] = [
    {companyName: 'Neoris', projectName: 'test1', residentNumber: 12, careerName: 'sistemas', contactName: 'test', email: 'gsdfgs@email.com', numberPhone: 1234567, place: 'Culiacan'},
    {companyName: 'Concredito', projectName: 'test2', residentNumber: 12, careerName: 'tics', contactName: 'test', email: 'gsdfgs@email.com', numberPhone: 1234567, place: 'Culiacan'},
    {companyName: 'Coppel', projectName: 'test3', residentNumber: 12, careerName: 'industrial', contactName: 'test', email: 'gsdfgs@email.com', numberPhone: 1234567, place: 'Culiacan'},
    {companyName: 'SuKarne', projectName: 'test4', residentNumber: 12, careerName: 'ambiental', contactName: 'test', email: 'gsdfgs@email.com', numberPhone: 1234567, place: 'Culiacan'},
    {companyName: 'Arco', projectName: 'test5', residentNumber: 12, careerName: 'mecatronica', contactName: 'test', email: 'gsdfgs@email.com', numberPhone: 1234567, place: 'Culiacan'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
