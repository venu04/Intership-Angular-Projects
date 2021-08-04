import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';


import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
@Component({
  selector: 'app-vendorpocreate',
  templateUrl: './vendorpocreate.component.html',
  styleUrls: ['./vendorpocreate.component.css']
})
export class VendorpocreateComponent implements OnInit {
  public responseponumber:any;
  public products_inq: any = [];
public vendorid:any;
public ccode:any;
public purchorg:any;
public group:any;
public plant:any;
public matnr:any="000000000000000025";
public shtext:any;
public location:any;
public quantity:any;
public date1:any;
public delivery:any;
public deliverydate:any;
public startdate:any;
public year_1:any;
public year_2:any;
public month_1:any;
public month_2:any;
public day_1:any;
public day_2:any;
constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  public products: any = [];
  public userprofile: any = [];


  ngOnInit(): void {
  }


  getData() {
    if ( !!this.date1.valueOf() ) { // Valid date
    this.year_1 = this.date1.getFullYear();
    this.month_1 = this.date1.getMonth();
    this.day_1 = this.date1.getDate();
}
this.startdate=this.year_1+"-"+String(Number(this.month_1)+1)+"-"+this.day_1;
if ( !!this.delivery.valueOf() ) { // Valid date
  this.year_2 = this.delivery.getFullYear();
  this.month_2 = this.delivery.getMonth();
  this.day_2 = this.delivery.getDate();
}
this.deliverydate=this.year_2+"-"+String(Number(this.month_2)+1)+"-"+this.day_2;

    console.log("vendorid ",this.vendorid);
    console.log("startdate ",this.startdate);
    console.log("deliverydate ",this.deliverydate);
    console.log("companycode ",this.ccode);
    console.log("plant ",this.plant);
    console.log("purchasing org ",this.purchorg);
    console.log("group ",this.group);
    console.log("location ",this.location);
    console.log("quantity ",this.quantity);
    console.log("short text ",this.shtext);
    console.log("matnr ",this.matnr);

      const url = `api/venuv4pocreate`;
      const  postData1 = "<ns0:ZBAPI_VND_PO_CREATE_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <COMPANYCODE>"+this.ccode+"</COMPANYCODE>\r\n   <DATE>"+this.date1+"</DATE>\r\n   <DELIVERY>"+this.deliverydate+"</DELIVERY>\r\n   <GROUP>"+this.group+"</GROUP>\r\n   <LOCATION>"+this.location+"</LOCATION>\r\n   <MATERIALNO>"+this.matnr+"</MATERIALNO>\r\n   <PLANT>"+this.plant+"</PLANT>\r\n   <PURCHORG>"+this.purchorg+"</PURCHORG>\r\n   <QUANTITY>10.000</QUANTITY>\r\n   <SHORTTEXT>"+this.shtext+"</SHORTTEXT>\r\n   <VENDORID>SA3000</VENDORID>\r\n   <RETURN>\r\n      <item>\r\n         <TYPE/>\r\n         <CODE/>\r\n         <MESSAGE/>\r\n         <LOG_NO/>\r\n         <LOG_MSG_NO/>\r\n         <MESSAGE_V1/>\r\n         <MESSAGE_V2/>\r\n         <MESSAGE_V3/>\r\n         <MESSAGE_V4/>\r\n      </item>\r\n   </RETURN>\r\n</ns0:ZBAPI_VND_PO_CREATE_V4>";
     this.http.post(url, postData1).subscribe(data => {
       console.log(data);
       this.products_inq=data;
       this.responseponumber=this.products_inq.PONUMBER;
       //console.log(data.PONUMBER);+data.PONUMBER
       if(this.responseponumber==null || this.responseponumber=='')
       {
        this._snackBar.open("PO is not created "+this.responseponumber, "close", {
          duration: 5000,});
       }
       else{
       this._snackBar.open("PO is created "+this.responseponumber, "close", {
    duration: 5000,});
       }
    })


  }
  



}
