import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vendorchangepassword',
  templateUrl: './vendorchangepassword.component.html',
  styleUrls: ['./vendorchangepassword.component.css']
})
export class VendorchangepasswordComponent implements OnInit {

  httpClient:any;   
  public output=[];
  passtype:string = "password";
  passicon:string = "fas fa-eye";
  passtype1:string = "password";
  passicon1:string = "fas fa-eye";
  name: string = '';
  password: string = '';
  password1: string = '';
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
    if(this.name=="" || this.password==""  || this.password1=="" || this.password!=this.password1)
    {
      this.loader="normal";
      this.showError = true;
      this.router.navigate[("/vendorchangepassword")];
    }
    else
    {
      this.showError=false
      this.showError1=false
      const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_PASSWORD_CHANGE_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <CUSTID></CUSTID>\r\n   <EMPID/>\r\n   <FLAG>VP</FLAG>\r\n   <PASSWORD>"+this.password+"</PASSWORD>\r\n   <VENDORID>"+this.name+"</VENDORID>\r\n</ns0:ZBAPI_PASSWORD_CHANGE_V4>"
      const url=`api/changepassfinalv4`;
      this.http.post(url,postData1).toPromise().then((data:any)=>{
          this.loader="normal";
          console.log(data)
          status=data.RETURN.MESSAGE;
          console.log(status)
          if(status=='I')
          {
            this.showError1=true;
            this.router.navigateByUrl('/vendorchangepassword');
          }
          else if(status=='S')
          {
            this._snackBar.open("Password Successfully Changed", "close", {
              duration: 9000,});
         
        
            this.router.navigateByUrl('/vendorlogin');
          }
        }).catch(err => console.error);
    }
}
togglePassword(){
  if(this.passtype === "password")
  {
    this.passtype = "text";
    this.passicon = "fas fa-eye-slash";
  }
  else
  {
    this.passtype = "password";
    this.passicon = "fas fa-eye";
  } 
}
togglePassword1(){
  if(this.passtype1 === "password")
  {
    this.passtype1 = "text";
    this.passicon1 = "fas fa-eye-slash";
  }
  else
  {
    this.passtype1 = "password";
    this.passicon1 = "fas fa-eye";
  } 
}
forgetpassword(){
  this.router.navigateByUrl('/vendorchangepassword');
}

}
