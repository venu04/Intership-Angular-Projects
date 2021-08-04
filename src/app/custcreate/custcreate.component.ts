import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custcreate',
  templateUrl: './custcreate.component.html',
  styleUrls: ['./custcreate.component.css']
})
export class CustcreateComponent implements OnInit {

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }
  public products: any = [];
  public userprofile: any = [];

  name:any;
  phone:any;
  phone2:any;
  street:any;
  city: any;
  pincode: any;
  country: any;
  password:any;
  salesorg:any;
  distri:any;
  division:any;




  isReadonly=true
  btn_text = "Edit"
  btn_color = "#ec171b"
  hd_color ="#ec171b"


  ngOnInit(): void {
    
  }


  
    
  enableEdit(){
   
      
      const url = `api/cusuploadv4`;
      const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_CUST_UPLOAD xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <CITY>"+this.city+"</CITY>\r\n   <COUNTRY>"+this.country+"</COUNTRY>\r\n   <DISTR_CHAN>"+this.distri+"</DISTR_CHAN>\r\n   <DIVISION>"+this.division+"</DIVISION>\r\n   <FIRSTNAME>"+this.name+"</FIRSTNAME>\r\n   <LASTNAME>.</LASTNAME>\r\n   <PASSWORD>"+this.password+"</PASSWORD>\r\n   <PERSONALDATA>\r\n      <FORM_OF_AD/>\r\n      <FIRST_NAME/>\r\n      <NAME/>\r\n      <NAME_3/>\r\n      <NAME_4/>\r\n      <DATE_BIRTH/>\r\n      <STREET/>\r\n      <POSTL_CODE/>\r\n      <CITY/>\r\n      <REGION/>\r\n      <COUNTRY/>\r\n      <COUNTRNISO/>\r\n      <COUNTRAISO/>\r\n      <INTERNET/>\r\n      <FAX_NUMBER/>\r\n      <TELEPHONE/>\r\n      <TELEPHONE2/>\r\n      <LANGU/>\r\n      <LANGU_ISO/>\r\n      <CURRENCY/>\r\n      <CURRENCY_ISO/>\r\n      <COUNTRYISO/>\r\n      <ONLY_CHANGE_COMADDRESS/>\r\n   </PERSONALDATA>\r\n   <POSTALCODE>"+this.pincode+"</POSTALCODE>\r\n   <REFERENCE>\r\n      <SALESORG/>\r\n      <DISTR_CHAN/>\r\n      <DIVISION/>\r\n      <REF_CUSTMR/>\r\n   </REFERENCE>\r\n   <REF_CUSTNO>6000042</REF_CUSTNO>\r\n   <SALESORG>"+this.salesorg+"</SALESORG>\r\n   <STREET>"+this.street+"</STREET>\r\n   <TELEPHONE>"+this.phone+"</TELEPHONE>\r\n   <TELEPHONE2>"+this.phone2+"</TELEPHONE2>\r\n</ns0:ZBAPI_CUST_UPLOAD>"
     this.http.post(url, postData1).subscribe(data => {
       console.log(data);
       this.products=data;
       console.log('products ',this.products);
       this._snackBar.open("Customer is created "+this.products.NEWCUSTID, "close", {
    duration: 25000,});

    })


    }
  }


  




