import { Component, OnInit } from '@angular/core';
import { BlobStorageService } from '../../services/BlobStorageService.service';

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

  showBlobs() {  
    return this.blobStorageService.showBlobs().subscribe(res=>{
      this.files = res;  
      console.log(res)
    })
  }  
  

}
