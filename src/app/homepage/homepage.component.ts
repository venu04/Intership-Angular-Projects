import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }
  public products: any = [];
  public userprofile: any = [];

  cust_id=localStorage.getItem('user');
  cust_name:any;
  cust_phone:any;
  cust_street:any;
  cust_city: any;
  cust_pincode: any;
  cust_land: any;
  cust_state:any;




  isReadonly=true
  btn_text = "Edit"
  btn_color = "#ec171b"
  hd_color ="#ec171b"


  ngOnInit(): void {
    this.getData();
  }


  
    
  enableEdit(){
    if(this.isReadonly == true)
    {
      this.isReadonly=false
      this.btn_text="Save";
      this.btn_color="#007bff";
      this.hd_color="#007bff";
    }
    else{
      this.isReadonly=true
      this.btn_text="Edit"
      this.btn_color = "#ec171b"
      this.hd_color="#ec171b";
      
      const url = `api/custportalvenu`;
      const  postData1 = {

          "CUSTID":this.cust_id,
          "NAME":this.cust_name,
          "FLAG": "PROUP",
          "HOUSENO":this.cust_street,
          "CITY":this.cust_city,
          "POSTAL":this.cust_pincode,
          "COUNTRY":this.cust_land,
          "PHONE":this.cust_phone,
          "STATE":this.cust_state,
         
      }
     this.http.post(url, postData1).subscribe(data => {
       console.log(data);
       this._snackBar.open("Updated Successfully", "close", {
        duration: 5000,});

    })


    }
  }


  getData() {
    console.log("auto");
    const  postData1 = {
          "CUSTID":localStorage.getItem('user'),
          "FLAG": "PRO",
       
       };
    const url = `api/custportalvenu`;
  
    this.http.post(url, postData1).subscribe(data => {
        this.products = data;
        console.log(data);
       this.userprofile = this.products.IT_PRO;
         console.log(this.userprofile);
        console.log(this.products);
        this.cust_id= this.userprofile.ID;
        this.cust_name=this.userprofile.NAME;
        this.cust_city = this.userprofile.CITY;
        this.cust_pincode= this.userprofile.POSTAL;
        this.cust_land=this.userprofile.LAND;
        this.cust_phone=this.userprofile.PHONE;
        this.cust_state = this.userprofile.STATE; 
     
      })
  }
  



}
