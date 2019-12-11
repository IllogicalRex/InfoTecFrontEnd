import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectBankModel } from '../pages/models/project-bank.model';
import { ProjectModel } from '../pages/models/project-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


    public URL = 'https://localhost:44344/api/';


  constructor(public http: HttpClient) { }

  getAllCompanies() {
    return this.http.get(this.URL + 'empresa');
  }

}
