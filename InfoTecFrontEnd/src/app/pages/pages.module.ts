import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectBankComponent } from './prject-bank/project-bank.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';


@NgModule({
  declarations: [
    ProjectBankComponent,
    UserPanelComponent,
    FileManagerComponent,
    SeguimientoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ProjectBankComponent
  ]
})
export class PagesModule { }
