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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../interceptors/TokenInterceptor.interceptor';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { FileAsesorManagerComponent } from './asesor/file-manager/file-manager.component';


@NgModule({
  declarations: [
    ProjectBankComponent,
    UserPanelComponent,
    FileManagerComponent,
    PagesComponent,
    SeguimientoComponent,
    FileAsesorManagerComponent
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
    FileManagerComponent,
    FileAsesorManagerComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TokenInterceptor
  ]
})
export class PagesModule { }
