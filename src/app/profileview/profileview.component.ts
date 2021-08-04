import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.css']
})
export class ProfileviewComponent implements OnInit {

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }
  public products: any = [];
  public userprofile: any = [];

  vendor_id=localStorage.getItem('vendor');
  vendor_name:any;
  vendor_phone:any;
  vendor_street:any;
  vendor_city: any;
  vendor_pincode: any;
  vendor_land: any;



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
      this.btn_color="#FFA700";
      this.hd_color="#FFA700";
    }
    else{
      this.isReadonly=true
      this.btn_text="Edit"
      this.btn_color = "#ec171b"
      this.hd_color="#ec171b";
      
      const url = `api/vndvenu4`;
      const  postData1 = {

        "VENDORID":this.vendor_id,
          "NAME":this.vendor_name,
          "FLAG": "PROUP",
          "STREET":this.vendor_street,
          "CITY":this.vendor_city,
          "PINCODE":this.vendor_pincode,
          "COUNTRY":this.vendor_land,
          "PHONE":this.vendor_phone,
          "STATE":this.vendor_street,
         
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
          "VENDORID":localStorage.getItem('vendor'),
          "FLAG": "PRO",
       
       };
    const url = `api/vndvenu4`;
  
    this.http.post(url, postData1).subscribe(data => {
        this.products = data;
        console.log(data);
       this.userprofile = this.products.IT_PRO.item;
        console.log('USER PROFILE',this.userprofile);
        console.log(this.products);
        this.vendor_id= this.userprofile.VENDOR;
        console.log('vendor id',this.vendor_id);
        this.vendor_name=this.userprofile.NAME;
        this.vendor_city = this.userprofile.CITY;
        this.vendor_pincode= this.userprofile.POSTL_CODE;
        this.vendor_land=this.userprofile.COUNTRY;
        this.vendor_phone=this.userprofile.TELEPHONE;
        this.vendor_street = this.userprofile.STREET; 
      })
  }
  



}
