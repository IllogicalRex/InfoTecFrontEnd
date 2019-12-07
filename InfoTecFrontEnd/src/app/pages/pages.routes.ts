import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBankComponent } from './prject-bank/project-bank.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AuthGuard } from '../guards/auth.guard';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'bank', component: ProjectBankComponent, canActivate: [AuthGuard], data: {titulo: 'Banco de Proyectos'} },
            {path: 'user', component: UserPanelComponent, canActivate: [AuthGuard], data: {titulo: 'Panel de usuario'}  },
            {path: 'file', component: FileManagerComponent, canActivate: [AuthGuard], data: {titulo: 'Archivos'} }
        ]
    },
];

export  const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
