import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { AuthGardService } from './services/auth-gard.service';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/TokenInterceptor.interceptor';

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
  providers: [AuthGardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    TokenInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
