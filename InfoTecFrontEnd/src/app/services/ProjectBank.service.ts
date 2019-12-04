import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrjectBankService {


    public URL = 'https://localhost:44344/api/';


  constructor(public http: HttpClient) { }

  getPrjectBank() {
    return this.http.get(this.URL + 'projectbank');
  }

}
