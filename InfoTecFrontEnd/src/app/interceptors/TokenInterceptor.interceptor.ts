import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header to request

        // Get Token data from local storage
        let tokenInfo = JSON.parse(localStorage.getItem('token'));

        if (tokenInfo && tokenInfo.token) {
        request = request.clone({
        setHeaders: {
        Authorization: `Bearer ${tokenInfo.token}`,
        Accept: 'application/json'
        }
        });
        }
        return newRequest.handle(request);
        }
}
