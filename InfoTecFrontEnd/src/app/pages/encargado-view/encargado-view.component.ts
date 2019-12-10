import { Component, OnInit } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-encargado-view',
  templateUrl: './encargado-view.component.html',
  // styleUrls: ['./encargado-view.component.css']
})
export class EncargadoViewComponent implements OnInit {

  constructor(public blobStorageService: BlobStorageService) { }
  files: string[] = [];  
  fileToUpload: FormData;  
  fileUpload: any;  
  loadedFile: any;
  fileUpoadInitiated: boolean;  
  fileDownloadInitiated: boolean; 
  documents: any;
  id:any;
  tipo:any;
  estado:any;
  extn:any;

  encargado = JSON.parse(localStorage.getItem('token'));

  ngOnInit() {
    this.id= JSON.parse(localStorage.getItem("token"));
    this.getDocumentoEncargado(this.id.userName);
  }
   //descarga archivo
   downloadFile(fileName: any) { 
    return this.blobStorageService.downloadFile(fileName)
  }
//Elimina un archivo
  deleteFile(fileName: any){
    return this.blobStorageService.deleteFile(fileName).subscribe(()=>this.getDocumentoEncargado(this.id.userName))
    // return Swal.fire({
    //   title: 'Reenviar archivo',
    //   text: 'Seguro que desea enviar archivo?',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes'
    // }).then((res)=>{
    //   if (res.value) {
    //     console.log(this.id.userName)
    //   }
      
    // })
  }

  getDocumentoEncargado(id){

    this.blobStorageService.getDocumentoEncargado(id).subscribe((res:any)=>{
          this.documents=res;
      });
  }
  handleFileInput(files: any) { 
    this.extn = files[0].name.split(".").pop();

    console.log(files[0].name);
    this.loadedFile = files;
  }  
  uploadFiles(tipo: number, estado:number,comentarioAsesor,comentarioAdmRes,asesor,admin) {
    let formData: FormData = new FormData(); 
    let DocName = String(this.loadedFile[0].name);
    formData.append('asset', this.loadedFile[0], DocName);
    this.fileToUpload = formData; 
    if(this.extn==="pdf" || this.extn==="doc" || this.extn==="docx"){
    this.documents.map((res)=>{

      if(DocName===res.url){
        let document = {
          AlumnId: res.alumnId,
          Idtipo: tipo,
          url: res.url,
          fecha: res.fecha,
          ComentarioAsesor: res.comentarioAsesor,
          idEstatus: estado,
          ComentarioAdmRes: res.comentarioAdmRes,
          Idasesor: res.idasesor,
          idadmin: this.encargado.userName
        };
        this.deleteFile(res.url);
          this.onUploadFiles();
          this.blobStorageService.updateFileToDataBase(document).subscribe();
      }
    })
  } else{
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

  onUploadFiles() {  
    if (this.fileUpoadInitiated) {  
      return;  
    }  
    this.fileUpoadInitiated = true;  
    if (this.fileToUpload == undefined) {  
      this.fileUpoadInitiated = false;  
      return false;  
    } else {
      return  this.blobStorageService.insertFile(this.fileToUpload).subscribe(()=>{
        Swal.fire({
          title: 'Archivo enviado!',
          text: '',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.fileToUpload=null;

      });
    }
  }

  setTipo(value){
    this.tipo=value;
  }
  setEstado(value){
    this.estado=value;
  }

}
