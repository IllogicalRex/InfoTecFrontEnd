import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { saveAs } from 'file-saver'; 
declare var require: any;  
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
//muestra los archivos
  showBlobs() {  
    return this.blobStorageService.get(this.URL + 'blobstorage/listfiles');
  } 
  //agrega un archivo
  insertFile(fileToUpload: any){
    return this.blobStorageService.post(this.URL + 'blobstorage/insertfile', fileToUpload)
    .pipe(map((res: any)=>{
      Swal.fire({
        title: 'Archivo enviado!',
        text: '',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
         return res;
    }));
  }
//descarga un archivo
  downloadFile(fileName: any) {  
    return this.blobStorageService.get(this.URL + 'blobstorage/downloadfile/' + fileName,{ responseType: "blob" })
    .subscribe((result: any) => {  
      if (result.type != 'text/plain') {  
        var blob = new Blob([result]);  
        let saveAs = require('file-saver');  
        let file = fileName;  
        saveAs(blob, file);  
        this.fileDownloadInitiated = false;  
      }  
      else {  
        this.fileDownloadInitiated = false;  
        alert('Archivo no encontrado');  
      }  
    }) 
  }  
//elimina un archivo
  deleteFile(fileName: string) {  
    return this.blobStorageService.get(this.URL + 'blobstorage/deletefile/' + fileName)
      
      
  

  }
}
