import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  name:string='';
  email:string='';
  message:string='';
  constructor(private router:Router,public http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  title="export-to-excel";
  filename='contact.xlsx';
  
  contactus() {
    const  postData1 = {
      tomail: this.email,
      sub: this.message
   };
  const url=`http://localhost:8000/sendmail`;
  this.http.post(url,postData1).toPromise().then((data:any)=>{
      console.log(data)

      
    }).catch(err => console.error);

      this.router.navigate[("/home")];
      console.log("hii"+this.name);
      console.log("sub and mail "+this.message+" "+this.email)
      this._snackBar.open("Hii "+this.name +" Thankyou!!!", "close", {
        duration: 5000,});
    
}

}
