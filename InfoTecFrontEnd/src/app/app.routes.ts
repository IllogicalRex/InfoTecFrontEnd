import { RouterModule, Routes } from '@angular/router';
import { ProjectBankComponent } from './pages/prject-bank/project-bank.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
      {path: 'login', component: UserLoginComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
