import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectBankModel } from '../pages/models/project-bank.model';
import { ProjectModel } from '../pages/models/project-model';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {


    public URL = 'https://localhost:44344/api/';


  constructor(public http: HttpClient) { }

  getEncargado(id: string) {
    return this.http.get(this.URL + 'admin/' + id);
  }

  
/* 
  projectSubscription(project: ProjectModel) {
    return this.http.post(this.URL + 'projectbank/subscribir', project);
  } */

}
