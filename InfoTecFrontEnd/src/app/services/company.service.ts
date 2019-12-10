import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectBankModel } from '../pages/models/project-bank.model';
import { ProjectModel } from '../pages/models/project-model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


    public URL = 'https://localhost:44344/api/blobstorage/';


  constructor(public http: HttpClient) { }

  getPrjectBank() {
    return this.http.get(this.URL + 'projectbank');
  }

  uploadService(files: any) {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    const json = JSON.stringify(files); 
    return this.http.post(this.URL + '/insertFile', json);
  }

}
