import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProjectBankComponent } from './prject-bank/project-bank.component';


@NgModule({
  declarations: [
    ProjectBankComponent
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
