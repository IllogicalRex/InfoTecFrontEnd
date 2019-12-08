import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  
  files: string[] = [];  
  fileToUpload: FormData;  
  fileUpload: any;  
  loadedFile: any;
  fileUpoadInitiated: boolean;  
  fileDownloadInitiated: boolean; 
  user = JSON.parse(localStorage.getItem('token'));

  constructor(public blobStorageService: BlobStorageService,
              public fileService: FileUploadService) { 
              }
  ngOnInit() {

    let id= JSON.parse(localStorage.getItem("token"));
   this.getDocument(id.userName);
  }
  //maneja el tipo de archivo
  handleFileInput(files: any) {  
    console.log(files[0].name);
    this.loadedFile = files;
  }  
  // sube el archivo
  onUploadFiles() {  
    if (this.fileUpoadInitiated) {  
      return;  
    }  
    this.fileUpoadInitiated = true;  
    if (this.fileToUpload == undefined) {  
      this.fileUpoadInitiated = false;  
      return false;  
    } else {
      return  this.blobStorageService.insertFile(this.fileToUpload).subscribe(res=>res);
    }
  }

  uploadFiles(tipo: number) {
    console.log('archivo  ',  this.user.userName);
    let DocName = String(this.user.userName + '-' + this.loadedFile[0].name);
    let formData: FormData = new FormData(); 
    formData.append('asset', this.loadedFile[0], DocName);
    this.fileToUpload = formData; 
    this.onUploadFiles();
    let docuemnt = {
      AlumnId: this.user.userName,
      Idtipo: tipo,
      url: DocName,
      fecha: new Date(),
      ComentarioAsesor: '',
      idEstatus: 1,
      ComentarioAdmRes: '',
      Idasesor: '12345678',
      idadmin: '15327486'
    };
    this.blobStorageService.addFileToDataBase(docuemnt).subscribe();
  }

  getDocument(numControl){
    console.log(numControl)
    this.blobStorageService.getDocument(numControl).subscribe();
  }

}
