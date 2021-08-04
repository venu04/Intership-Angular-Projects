import { Injectable } from '@angular/core';
import * as http from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements http.HttpInterceptor {

  constructor() { }

  intercept(request: http.HttpRequest<any>, next: http.HttpHandler): Observable<http.HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
   const authData = window.btoa( 'YOUR USERNAME' + ':' + 'YOUR PASSWORD' );
   request = request.clone({
      setHeaders: {
          Authorization: `Basic ${authData}`,
          // 'Content-Type': 'application/xml'
      }
  });

   return next.handle(request);
}
}