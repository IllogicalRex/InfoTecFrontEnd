import { Component, OnInit } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {

  constructor(public blobStorageService: BlobStorageService) { }
  files: any;
  fileToUpload: FormData;  
  fileUpload: any;  
  fileUpoadInitiated: boolean;  
  fileDownloadInitiated: boolean; 
  ngOnInit() {
    this.showBlobs();
  }
//Muestra todos los archivos
  showBlobs() {  
    return this.blobStorageService.showBlobs().subscribe(res=>{
      this.files = res;  
    })
  }  
  //descarga archivo
  downloadFile(fileName: any) { 
    return this.blobStorageService.downloadFile(fileName)
  }
//Elimina un archivo
  deleteFile(fileName: any){
    return Swal.fire({
      title: 'Eliminar archivo',
      text: 'Seguro que desea borrar el archivo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes'
    }).then((res)=>{
      if (res.value) {
        return this.blobStorageService.deleteFile(fileName).subscribe(()=>this.showBlobs())
      }
      
    })
  }

}
