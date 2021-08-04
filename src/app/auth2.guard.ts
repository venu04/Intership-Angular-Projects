import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {
  constructor(private auth:AuthService,private _router:Router){}


  canActivate():boolean{
    if(this.auth.eloggedIn())
    {
      return true;
    }
    else{
      this._router.navigateByUrl('/emplogin');
      return false;
    }
  }
  
}
