import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {
  constructor(private auth:AuthService,private _router:Router){}


  canActivate():boolean{
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
