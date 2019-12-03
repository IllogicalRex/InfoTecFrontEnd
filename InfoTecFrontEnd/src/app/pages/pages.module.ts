import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectBankComponent } from './prject-bank/project-bank.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    ProjectBankComponent,
    UserPanelComponent,
    FileManagerComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    PAGES_ROUTES
  ],
  exports: [
    ProjectBankComponent,
    UserPanelComponent,
    FileManagerComponent
  ]
})
export class PagesModule { }
