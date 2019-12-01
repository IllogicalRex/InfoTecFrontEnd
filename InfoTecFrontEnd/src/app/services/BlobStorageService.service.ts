import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlobStorageService {

  public URL = 'https://localhost:44344/api/';
  files: string[] = [];  
  fileToUpload: FormData;  
  fileUpload: any;  
  fileUpoadInitiated: boolean;  
  fileDownloadInitiated: boolean;  
 
  constructor(public blobStorageService: HttpClient) {}

  showBlobs() {  
    return this.blobStorageService.get(this.URL + 'blobstorage/listfiles');
  } 
  insertFile(fileToUpload: any){
    
    return this.blobStorageService.post(this.URL + 'blobstorage/insertfile', fileToUpload);
  }

  downloadFile(fileName: string) {  
    return this.blobStorageService.get(this.URL + 'blobstorage/downloadfile' + fileName)
  }  
  deleteFile(fileName: string) {  
  return this.blobStorageService.get(this.URL + 'blobstorage/deletefile' + fileName)
  }
}
