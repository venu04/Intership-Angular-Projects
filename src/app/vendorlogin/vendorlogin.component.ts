import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
  httpClient:any;   
  public output=[];
  passtype:string = "password";
  passicon:string = "fas fa-eye";

  name: string = '';
  password: string = '';
  showError = false
  showError1 = false
  loader="normal";
  constructor(public service:HttpService,public http: HttpClient,private router:Router,private auth:AuthService) { 
    //this.loginUser();
  }



  ngOnInit(): void {
  }
  loginUser()
  {
    this.loader = "active";
    if(this.name=="" || this.password=="")
    {
      this.loader="normal";
      this.showError = true;
      this.router.navigate[("/vendorlogin")];
    }
    else
    {
      this.showError=false
      this.showError1=false
      const  postData1 = {
        VENDORID: this.name,
          PASSWORD: this.password,
          FLAG: "LO"
       };
      const url=`api/vndvenu4`;
      
      this.http.post(url,postData1).toPromise().then((data:any)=>{
          this.loader="normal";
          console.log(data)
          status=data.RETURN.MESSAGE;
          console.log('STATUS',status)
          if(status=='INVALID')
          {
            this.showError1=true;
            this.router.navigateByUrl('/vendorlogin');
          }
          else if(status=='SUCCESS')
          {
            localStorage.setItem('vendor',this.name);
            this.router.navigateByUrl('/vendorhomepage');
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
forgetpassword(){
  this.router.navigateByUrl('/vendorentermail');
}


}
