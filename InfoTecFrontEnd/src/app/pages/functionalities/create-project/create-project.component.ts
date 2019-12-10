import { Component, OnInit } from '@angular/core';
import { ProjectBankModel } from '../../models/project-bank.model';
import { CompanyService } from '../../../services/company.service';
import { CompanyModel } from '../../models/company.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {


  project: ProjectBankModel = new ProjectBankModel ();
  companies: CompanyModel [] = [];


  constructor(public companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe((res: CompanyModel[]) => {
      this.companies = res;
      console.log(this.companies);
    });
  }

  SaveResource(f: any) {
  }

}
