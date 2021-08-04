import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-vendorinvoice',
  templateUrl: './vendorinvoice.component.html',
  styleUrls: ['./vendorinvoice.component.css']
})
export class VendorinvoiceComponent implements OnInit {


  mySelect = '2';
  invid:any;
  date:any;
  item:any;
  price:any;
  ctype:any;
  subtot=0;

  vendor_id=localStorage.getItem('vendor');
  vendor_name:any;
  vendor_phone:any;
  vendor_street:any;
  vendor_city: any;
  vendor_pincode: any;
  vendor_land: any;



  
  public products_inq: any = [];
  public inquirydat: any = [];
  public inquirydat1:any =[];
  public products: any = [];
  public userprofile: any = [];


  httpClient: any;
  constructor(private http: HttpClient) { 
    this.getInquiryData();
  }


  ngOnInit(): void {
  }
  download(){
    var element = document.getElementById('invoice');
    html2canvas(element).then((canvas)=>{
      console.log(canvas);

      var imgData = canvas.toDataURL('image/png')
      var doc = new jspdf()
      var imgHeight = canvas.height*208/canvas.width;
      console.log('img height'+imgHeight)
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("vendor-invoice.pdf")
    })
  }


  
  //get data from sap 
  getInquiryData() {
    const  postData1 = {
      "VENDORID": localStorage.getItem('vendor'),
      "FLAG": "INV",
       };
       const  postData2 = {
        "VENDORID": localStorage.getItem('vendor'),
        "FLAG": "PRO",
         };
    const url = `api/vndvenu4`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_INV_ITEM.item;
        console.log(data);
        console.log('inq item'+this.products_inq.IT_INV_ITEM.item);
        console.log("inquirtydat"+this.inquirydat);
        for(var i=0;i<this.inquirydat.length;i++)
  {

    this.subtot=this.subtot+Number(this.inquirydat[i].AMOUNT);
    console.log("inquirydat amount and subtot ",this.subtot," ",this.inquirydat[i].AMOUNT);}
      })

      this.http.post(url, postData2).subscribe(data => {
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





selectChange() {
  console.log("method called")
  for(var i=0;i<this.inquirydat.length;i++)
  {

    this.subtot=this.subtot+this.inquirydat[i].AMOUNT;
    console.log("inquirydat amount and subtot ",this.subtot," ",this.inquirydat[i].AMOUNT);
    if(this.mySelect == this.inquirydat[i].VBELN)
    {
      console.log("for selected value loop"+this.inquirydat[i].VBELN);
      this.invid=this.inquirydat[i].VBELN;
      this.date=this.inquirydat[i].FKDAT;
      this.item=this.inquirydat[i].INCO2;
      this.price=this.inquirydat[i].NETWR;
      this.ctype=this.inquirydat[i].WAERK;
    }
  }
  
}


}

