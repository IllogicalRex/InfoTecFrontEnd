import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        CommonModule
    ],
    exports: [
        SidebarComponent,
        NavbarComponent
    ]
})

export class SharedModule { }
