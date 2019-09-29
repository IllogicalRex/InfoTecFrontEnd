import { RouterModule, Routes } from '@angular/router';
import { ProjectBankComponent } from './pages/prject-bank/project-bank.component';

const appRoutes: Routes = [
   {path: 'bank', component: ProjectBankComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
