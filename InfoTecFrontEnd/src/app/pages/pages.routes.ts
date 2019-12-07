import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBankComponent } from './prject-bank/project-bank.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AuthGuard } from '../guards/auth.guard';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'bank', component: ProjectBankComponent, canActivate: [AuthGuard], data: {titulo: 'Banco de Proyectos'} },
            {path: 'user', component: UserPanelComponent, canActivate: [AuthGuard], data: {titulo: 'Panel de usuario'}  },
            {path: 'file', component: FileManagerComponent, canActivate: [AuthGuard], data: {titulo: 'Archivos'} },
            {path: 'file', component: FileManagerComponent, canActivate: [AuthGuard], data: {titulo: 'Manejo de archivos'} },
            {path: 'seguimiento', component: SeguimientoComponent, canActivate: [AuthGuard], data: {titulo: 'Seguimiento'} }
        ]
    },
];

export  const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
