import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-enterempotp',
  templateUrl: './enterempotp.component.html',
  styleUrls: ['./enterempotp.component.css']
})
export class EnterempotpComponent implements OnInit {
  httpClient:any;   
  public output=[];
  passtype:string = "password";
  passicon:string = "fas fa-eye";
  name: string = '';
  password: string = '';
  showError = false
  showError1 = false
  loader="normal";
  constructor(public service:HttpService,public http: HttpClient,private router:Router,private auth:AuthService,private _snackBar: MatSnackBar) { 
    //this.loginUser();
  }



  ngOnInit(): void {
  }
  loginUser()
  {
    this.loader = "active";
    if(this.name=="")
    {
      console.log("enter password");
      this.loader="normal";
      this.showError = true;
      this.router.navigate[("/empenterotp")];
    }
    else
    {
      this.showError=false

      var otp=localStorage.getItem('employeeemailotp');
      console.log("otp ",otp);
      if(otp === this.name)
      {
        console.log("successfull");
        //this.router.navigate[("/customerforgetpassword")];
        
        this.router.navigateByUrl('/empchangepassword');
        this.loader="normal";
      }
      else
      {
        console.log("wrong password");
        this.showError1 = true;
        this.router.navigate[("/empenterotp")];
        this.loader="normal";
        console.log("wrong password1");
        //this.router.navigateByUrl('/customerenterotp');
      }
        

    }
}


}