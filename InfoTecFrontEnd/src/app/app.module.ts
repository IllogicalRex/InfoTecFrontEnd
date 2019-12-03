import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AuthGardService } from './services/auth-gard.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    FormsModule,
    APP_ROUTES,
    PagesModule,
    HttpClientModule,
  ],
  providers: [AuthGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
