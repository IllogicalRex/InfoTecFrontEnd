import { RouterModule, Routes } from '@angular/router';
import { ProjectBankComponent } from './pages/prject-bank/project-bank.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';

const appRoutes: Routes = [
   {path: 'bank', component: ProjectBankComponent },
   {path: 'user', component: UserPanelComponent },
   {path: 'file', component: FileManagerComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
