import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router:Router) { }
  
  loggedIn()
  {
    return !!localStorage.getItem('user');
  }
  
  logoutUser(){
    localStorage.removeItem('user');
    this._router.navigateByUrl('/login');
  }
  vloggedIn()
  {
    return !!localStorage.getItem('vendor');
  }
  
  vlogoutUser(){
    localStorage.removeItem('vendor');
    this._router.navigateByUrl('/vendorlogin');
  }

  eloggedIn()
  {
    return !!localStorage.getItem('employee');
  }
  
  elogoutUser(){
    localStorage.removeItem('employee');
    this._router.navigateByUrl('/emplogin');
  }
}
