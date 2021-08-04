import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-inquiryitemdata',
  templateUrl: './inquiryitemdata.component.html',
  styleUrls: ['./inquiryitemdata.component.css']
})
export class InquiryitemdataComponent implements OnInit {
  public products_inq: any = [];
  public inquirydat: any = [];
  public inquirydat1: any = [];
  public products_inq_new: any = [];
  public inquirydat_new: any = [];
  public inquirydat1_new: any = [];

  invoicebase64:any;
  userMail: string = '';
  mySelect = '2';
  number:any;
  ponumber:any;
  status:any;
  name:any;
  date:any;
  item:any;
  quantity:any;
  price:any;
  subtot:any;
  currency:any;
  disc:any;



  
  
  vendor_id=localStorage.getItem('user');
  vendor_name:any;
  vendor_phone:any;
  vendor_street:any;
  vendor_city: any;
  vendor_pincode: any;
  vendor_land: any;

  DOC_NUMBER:any;
  ITM_NUMBER:any;
  MATERIAL:any;
  SHORT_TEXT:any;
  ITEM_CATEG:any;
  CURRENCY:any;
  UNIT_OF_WT:any;
  NET_PRICE:any;
  REQ_QTY:any;
  NET_VALUE:any;
  docnu:any;


  httpClient: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }


  ngOnInit(): void {
  }
  download(){
    var element = document.getElementById('invoice');
    html2canvas(element).then((canvas)=>{
      console.log(canvas);

      var imgData = canvas.toDataURL('image/png')
      console.log(imgData);
      var doc = new jspdf()
      var imgHeight = canvas.height*208/canvas.width;
      console.log('img height'+imgHeight)
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("INQUIRY.pdf")
    })
  }

  sendmail()
  {
    var element = document.getElementById('invoice');
      
      html2canvas(element).then((canvas)=>{
        console.log('canvas ',canvas);
  
        var imgData = canvas.toDataURL('image/png')
        console.log("invoice data",imgData.substring(22));
        this.invoicebase64=imgData.substring(22);
        console.log("user send mail",this.userMail);
    console.log("stringbase",this.invoicebase64)
      
    const  postDatamail = {
        tomail: this.userMail,
        sub: this.invoicebase64,
        name:"Inquiry"
     };
    const urlmail=`http://localhost:8000/sendmailattachpng`;
    this.http.post(urlmail,postDatamail).toPromise().then((data:any)=>{
        console.log(data)
  
  
        
      }).catch(err => console.error);
  
      })
    
         this._snackBar.open("mail send successfully", "close", {
      duration: 9000,});
  
    
  
      
  
  
  }
  




  
  getInquiryData() {
    const  postData1 = {
      "CUSTID": localStorage.getItem('user'),
      "FLAG": "INQ",
       };
    const url1 = `api/custportalvenu4`;

 


      this.http.post(url1, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_ITEM_INQD.item;
        console.log('inq item'+this.products_inq.IT_ITEM_INQD.item);
        console.log("inquirtydat"+this.inquirydat);
        
        
        for(var i=0;i<this.inquirydat.length;i++)
        {
          this.docnu=this.inquirydat[i].DOC_NUMBER;
        console.log("docnu "+this.docnu);
          console.log("Inside for "+this.inquirydat.DOC_NUMBER+" and "+localStorage.getItem('docnumber'));
          if(this.inquirydat[i].DOC_NUMBER == localStorage.getItem('docnumber'))
          {
            var mat = this.inquirydat[i].MATERIAL;
            mat = Number(mat).toString();
        this.DOC_NUMBER = this.inquirydat[i].DOC_NUMBER;
        this.ITM_NUMBER = this.inquirydat[i].ITM_NUMBER;
        this.MATERIAL = mat;
        this.SHORT_TEXT = this.inquirydat[i].SHORT_TEXT;
        this.ITEM_CATEG = this.inquirydat[i].ITEM_CATEG;
        this.CURRENCY = this.inquirydat[i].CURRENCY;
        this.UNIT_OF_WT = this.inquirydat[i].UNIT_OF_WT;
        this.NET_PRICE = this.inquirydat[i].NET_PRICE.split(".")[0];
        this.REQ_QTY = this.inquirydat[i].REQ_QTY;
        this.NET_VALUE = this.inquirydat[i].NET_VALUE.split(".")[0];
        console.log("inside if  and doc num "+this.NET_VALUE.toString());
          }
        }
        console.log("inquirtydat1"+this.inquirydat);
        
        
      })
}




selectChange() {
  console.log("method called")
  for(var i=0;i<this.inquirydat.length;i++)
  {
    if(this.mySelect == this.inquirydat[i].PO_NUMBER)
    {
      console.log("for selected value loop"+this.inquirydat[i].PO_NUMBER);
      this.number=i+1;
      this.ponumber=this.inquirydat[i].PO_NUMBER;
      this.status=this.inquirydat[i].STATUS;
      this.name=this.inquirydat[i].VEND_NAME;
      this.date=this.inquirydat[i].DOC_DATE;
      this.currency=this.inquirydat[i].CURRENCY;
      this.item=this.inquirydat1[i].SHORT_TEXT;
      this.quantity=this.inquirydat1[i].QUANTITY;
      this.price=this.inquirydat1[i].NET_PRICE;
      this.subtot=this.inquirydat1[i].QUANTITY*this.inquirydat1[i].NET_PRICE;
      this.disc=this.inquirydat[i].CASH_DISC1;
    }
  }
  
}


}

