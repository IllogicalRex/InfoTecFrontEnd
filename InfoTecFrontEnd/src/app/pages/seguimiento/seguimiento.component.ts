import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import Swal from 'sweetalert2'
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
  documents: any;
  user = JSON.parse(localStorage.getItem('token'));
  statusAceptacion:any=1;
  statusAnte: any=2;
  statusPrimer: any=3;
  statusSegundo: any=4;
  statusTercer: any=5;
  statusSeguiRepor: any=6;
  statusReporResi: any=7;
  estado:any;
  porAprobar: any=1;
  enProceso: any=2;
  Aprobado: any=3;
  Rechazado: any=4;

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
      return  this.blobStorageService.insertFile(this.fileToUpload).subscribe();
    }
  }

  uploadFiles(tipo: number, estado:number,comentarioAsesor,comentarioAdmRes,asesor,admin) {
    console.log('archivo  ',  this.user.userName);
    let DocName = String(this.user.userName + '-' + this.loadedFile[0].name);
    let formData: FormData = new FormData(); 
    formData.append('asset', this.loadedFile[0], DocName);
    this.fileToUpload = formData; 
    this.onUploadFiles();
    let document = {
      AlumnId: this.user.userName,
      Idtipo: tipo,
      url: DocName,
      fecha: new Date(),
      ComentarioAsesor: 'ComentarioAsesor',
      idEstatus: estado,
      ComentarioAdmRes: 'comentarioAdmRes',
      Idasesor: '12345678',
      idadmin: '15327486'
    };
    this.blobStorageService.addFileToDataBase(document).subscribe((res:any)=>{
        Swal.fire({
          title: 'Archivo enviado!',
          text: '',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
           return res;
    });
  }

  getDocument(numControl){
    this.blobStorageService.getDocument(numControl).subscribe((res:any)=>{
        res.map((res: any)=>{
          if(res.idEstatus!=3){
            if(res.idtipo===1){
              console.log(res)
              this.documents=res;
            }
            if(res.idtipo===2){
              console.log(res)
              this.documents=res;
            }
            if(res.idtipo===4){
              console.log(res)
              this.documents=res;
            }
          }
          if(res.idEstatus==3){
            this.documents={
              idtipo:res.idtipo+1,
              idEstatus:1
            };
          }
        })
      });
  }


}
