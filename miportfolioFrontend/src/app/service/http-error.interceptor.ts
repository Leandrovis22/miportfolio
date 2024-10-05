/* import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(error => {
          if (error.status === 0) {
            // CORS error
            alert('Tiempo de sesion expirado, por favor vuelva a iniciar sesion');
          }
          return throwError(error);
        })
      );
  }
}
 */