import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  constructor(public blobStorageService: BlobStorageService,
              public fileService: FileUploadService) { }
  files: string[] = [];  
  fileToUpload: FormData;  
  fileUpload: any;  
  fileUpoadInitiated: boolean;  
  fileDownloadInitiated: boolean; 

  ngOnInit() {
  }
  //maneja el tipo de archivo
  handleFileInput(files: any) {  
    console.log(files[0].name); 
    let formData: FormData = new FormData();  
    formData.append('asset', files[0], files[0].name);  
    this.fileToUpload = formData; 
    this.onUploadFiles();
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

  uploadFile() {
    this.fileService.uploadService(this.fileToUpload).subscribe((res: any) => {
      console.log(res);
    });
  }


}
