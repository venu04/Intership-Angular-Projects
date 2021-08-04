import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-enterempmail',
  templateUrl: './enterempmail.component.html',
  styleUrls: ['./enterempmail.component.css']
})
export class EnterempmailComponent implements OnInit {

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
    console.log("this.name=",this.name);
    if(this.name=="")
    {
      console.log("if works");
      this.loader="normal";
      this.showError = true;
      this.router.navigateByUrl('/empentermail');
      //this.router.navigate[("/empentermail")];
    }
    else
    {
      console.log("else works");
      this.showError=false
      this.showError1=false
      var val = Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem('employeeemailotp',val.toString());
      var otp=localStorage.getItem('employeeemailotp');
      console.log('otp ',localStorage.getItem('employeeemailotp'));
      const  postData1 = {
        "tootp": otp,
        "tomail":this.name,
        "name":"Employee"
         };
      const url = `http://localhost:8000/sendmailotp`;
    
      this.http.post(url, postData1).subscribe(data => {
         console.log("send successfully");
          
        })
        this._snackBar.open("OTP send successfully to mail", "close", {
          duration: 9000,});
          this.router.navigateByUrl('/empenterotp');
        }


}


}

        