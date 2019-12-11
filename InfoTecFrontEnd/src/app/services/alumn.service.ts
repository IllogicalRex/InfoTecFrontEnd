import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectBankModel } from '../pages/models/project-bank.model';
import { ProjectModel } from '../pages/models/project-model';

@Injectable({
  providedIn: 'root'
})
export class AlumnService {


    public URL = 'https://localhost:44344/api/';


  constructor(public http: HttpClient) { }

  getAlumno(id: string) {
    return this.http.get(this.URL + 'alumno/' + id);
  }

  

  projectSubscription(project: ProjectModel) {
    return this.http.post(this.URL + 'projectbank/subscribir', project);
  }

}
