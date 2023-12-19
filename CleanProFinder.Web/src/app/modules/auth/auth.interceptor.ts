import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exclude certain endpoints (e.g., sign-up and token endpoints)
    if (this.isExcludedEndpoint(request.url)) {
      return next.handle(request);
    }

    const token = localStorage.getItem('authToken');

    console.log(token);

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }

  private isExcludedEndpoint(url: string): boolean {
    // Add logic to check if the URL should be excluded from adding the Authorization header
    return url.includes('sign-up') || url.includes('token'); // Adjust as needed
  }
}
