import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private _router:Router){}

  canActivate():boolean{
    if(this.auth.loggedIn())
    {
      return true;
    }
    else{
      this._router.navigateByUrl('/login');
      return false;
    }
  }
  canActivate1():boolean{
    if(this.auth.vloggedIn())
    {
      return true;
    }
    else{
      this._router.navigateByUrl('/vendorlogin');
      return false;
    }
  }
  
}
