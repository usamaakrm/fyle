import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const API_KEY = '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';
    // { setHeaders: { Authorization: `Bearer ${API_KEY}` }}
    return next.handle(httpRequest.clone());
  }
}