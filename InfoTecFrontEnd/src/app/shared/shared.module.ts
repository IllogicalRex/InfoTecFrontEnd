import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        NavbarComponent,
        SidebarComponent
    ],
    imports: [
        FormsModule,
        RouterModule
    ],
    exports: [
        SidebarComponent,
        NavbarComponent
    ]
})

export class SharedModule { }
