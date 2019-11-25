import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrjectBankService {


    public URL = 'https://localhost:44344/api/';


  constructor(public projectBankService: HttpClient) { }

  getPrjectBank() {
    return this.projectBankService.get(this.URL + 'projectbank');
  }

}
