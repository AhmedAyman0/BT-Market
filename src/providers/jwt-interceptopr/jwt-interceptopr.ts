import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthProvider } from '../auth/auth';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from } from 'rxjs/observable/from';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthProvider,private storage:Storage) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available

        return from(this.handleAccess(request,next));
    }
    private async handleAccess(req: HttpRequest<any>, next: HttpHandler):
    Promise<HttpEvent<any>> {
      let currentUser = this.authenticationService.currentUserValue;
    const token = await this.storage.get('token');
    if (currentUser && token) {
      req = req.clone({
          setHeaders: {
              Authorization: `Bearer ${token.token}`
          }
      });
      console.log('req',req);
  }

  return next.handle(req).toPromise();
}
}