import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
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
  documents2: any;
  user = JSON.parse(localStorage.getItem('token'));
  extn:any;
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
  documentRechazado: any;
  algo:any;

  constructor(public blobStorageService: BlobStorageService,
             ) { 
                this.documents={
                 idtipo:0,
                 
               }
               this.documentRechazado={
                idEstatus:0,
                
              }
              }
  ngOnInit() {
 
    let id= JSON.parse(localStorage.getItem("token"));
    this.getDocument(id.userName);

  }
  
  getDocument(numControl){
 
    return this.blobStorageService.getDocument(numControl).subscribe((res:any)=>{
         let algo=res;
         algo.map((res:any)=>{
           if(res.idEstatus!=3){
            
             if(res.idtipo){
               this.documents=res;
               // return res;
             }
           
           }
           if(res.idEstatus==3){
           
              this.documents={
                 idtipo:res.idtipo+1,
                 idEstatus:1
               };
         
            }
            if(res.idEstatus==4){
             this.documentRechazado=res;
            
           }
     })
    // this.documents=res
     });
     

 }
  //maneja el tipo de archivo
  handleFileInput(files: any) {  
     this.extn = files[0].name.split(".").pop();
    this.loadedFile = files;

  }  
  // sube el archivo
  onUploadFiles() {  
    // if (this.fileUpoadInitiated) {  
    //   return;  
    // }  
    this.fileUpoadInitiated = true;  
    if (this.fileToUpload == undefined) {  
      this.fileUpoadInitiated = false;  
      return false;  
    } else {
      return  this.blobStorageService.insertFile(this.fileToUpload).subscribe();
    }
  }

  uploadFiles(tipo: number, estado:number,comentarioAsesor,comentarioAdmRes,asesor,admin) {
    let DocName = String(this.user.userName + '-' + this.loadedFile[0].name);
    let formData: FormData = new FormData(); 
    formData.append('asset', this.loadedFile[0], DocName);
    this.fileToUpload = formData; 
    if(this.extn==="pdf" || this.extn==="doc" || this.extn==="docx"){

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
        });
        this.loadedFile = null;
        
        this.getDocument(document.AlumnId)
        
          //  return res;
    });
  }
  else{
    return(
    Swal.fire({
      title: 'Archivo invalido',
      text: 'Favor de subir archivos con extensiones: pdf, doc o docx',
      icon: 'warning',
      confirmButtonText: 'Ok'
    })
    )
  }

  }


getDocumentos(res){

}
  showComments(){
    Swal.fire(
      'Comentario',
      this.documentRechazado.comentarioAsesor,
      this.documentRechazado.comentarioAdmRes
    )
  }
}
