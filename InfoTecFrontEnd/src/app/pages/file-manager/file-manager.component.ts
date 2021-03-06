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
  comentarioEncargado: string="";
  comentarioAsesor: string="";
  // statusAceptacion:any=1;
  // statusAnte: any=2;
  // statusPrimer: any=3;
  // statusSegundo: any=4;
  // statusTercer: any=5;
  // statusSeguiRepor: any=6;
  // statusReporResi: any=7;
  // porAprobar: any=1;
  // enProceso: any=2;
  // Aprobado: any=3;
  // Rechazado: any=4;
  asesor = JSON.parse(localStorage.getItem('token'));


  ngOnInit() {
    this.id= JSON.parse(localStorage.getItem("token"));
    this.getDocumentoAlumnoAsesor(this.id.userName);
    // this.showBlobs();
  }
//Muestra todos los archivos
  showBlobs() {  
    return this.blobStorageService.showBlobs().subscribe(res=>{
      this.documents = res;  
    })
  }  
  //descarga archivo
  downloadFile(fileName: any) { 
    return this.blobStorageService.downloadFile(fileName)
  }
//Elimina un archivo
  deleteFile(fileName: any){
  //   return Swal.fire({
  //     title: 'Reenviar archivo',
  //     text: 'Seguro que desea enviar archivo?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes'
  //   }).then((res)=>{
  //     if (res.value) {
  //       console.log(this.id.userName)
        return this.blobStorageService.deleteFile(fileName).subscribe(()=>this.getDocumentoAlumnoAsesor(this.id.userName))
    //   }
      
    // })
  }
  getDocumentoAlumnoAsesor(id){

    this.blobStorageService.getDocumentoAlumnoAsesor(id).subscribe((res:any)=>{
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
      if(DocName==res.url){
        let document = {
          AlumnId: res.alumnId,
          Idtipo: tipo,
          url: res.url,
          fecha: res.fecha,
          ComentarioAsesor: comentarioAsesor,
          idEstatus: estado,
          ComentarioAdmRes: comentarioAdmRes,
          Idasesor: this.asesor.userName,
          idadmin: res.idadmin
        };
          this.deleteFile(res.url);
          this.onUploadFiles();
          this.blobStorageService.updateFileToDataBase(document).subscribe(()=>{
            this.fileToUpload=null;

          });
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
    // if (this.fileUpoadInitiated) {  
    //   return;  
    // }  
    // this.fileUpoadInitiated = true;  
    // if (this.fileToUpload == undefined) {  
    //   this.fileUpoadInitiated = false;  
    //   return false;  
    // } else {
      return  this.blobStorageService.insertFile(this.fileToUpload).subscribe(()=>{
        Swal.fire({
          title: 'Archivo enviado!',
          text: '',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      });
    // }
  }

  setTipo(value){
    this.tipo=value;
  }
  setEstado(value){
 
    this.estado=value;
  }
  setComentarioEncargado(value){
    console.log(value)
    this.comentarioEncargado=value;
  }
  setComentarioAsesor(value){
    this.comentarioAsesor=value;
  }


}
