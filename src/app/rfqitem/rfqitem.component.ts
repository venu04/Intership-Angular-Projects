import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-rfqitem',
  templateUrl: './rfqitem.component.html',
  styleUrls: ['./rfqitem.component.css']
})
export class RfqitemComponent implements OnInit {
  public products_inq: any = [];
  public inquirydat: any = [];
  public inquirydat1: any = [];
  public products_inq_new: any = [];
  public inquirydat_new: any = [];
  public inquirydat1_new: any = [];
  invoicebase64:any;
  userMail: string = '';

  tcount=0;
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
  DOC_ITEM:any;
  MATERIAL:any;
  SHORT_TEXT:any;
  MAT_GRP:any;
  TARGET_QTY:any;
  GROS_VALUE:any;
  NET_PRICE:any;
  REQ_QTY:any;
  NET_VALUE:any;
  docnu:any;
  boxsize="390px";


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
        name:"Request-For-Quotation"
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
      "VENDORID": localStorage.getItem('vendor'),
      "FLAG": "RFQ",
       };
    const url1 = `api/vndvenu4`;

 


      this.http.post(url1, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_RFQ_ITEM.item;
        console.log('inq item'+this.products_inq.IT_RFQ_ITEM.item);
        console.log("inquirtydat"+this.inquirydat);
        
        var j=1;
        for(var i=0;i<this.inquirydat.length;i++)
        {
          
          this.docnu=this.inquirydat[i].DOC_NUMBER;
        console.log("docnu "+this.docnu);
          console.log("Inside for "+this.inquirydat.DOC_NUMBER+" and "+localStorage.getItem('rfqdocnumber'));
          if(this.inquirydat[i].DOC_NUMBER == localStorage.getItem('rfqdocnumber'))
          {
            var mat = this.inquirydat[i].MATERIAL;
            var item=this.inquirydat[i].DOC_ITEM;
            item=Number(item).toString();
            mat = Number(mat).toString();
        this.DOC_NUMBER = this.inquirydat[i].DOC_NUMBER;
        this.DOC_ITEM = item;
        this.MATERIAL = mat;
        this.SHORT_TEXT = this.inquirydat[i].SHORT_TEXT;
        this.MAT_GRP = this.inquirydat[i].MAT_GRP;
        this.TARGET_QTY = this.inquirydat[i].TARGET_QTY;
        this.GROS_VALUE = this.inquirydat[i].GROS_VALUE;
        this.NET_PRICE = this.inquirydat[i].NET_PRICE.split(".")[0];
        this.inquirydat1.push({tcount:j,item:this.DOC_ITEM,mat:this.MATERIAL,shorttext:this.SHORT_TEXT,matgrp:this.MAT_GRP,qty:this.TARGET_QTY,netprice:this.NET_PRICE,grosvalue:this.GROS_VALUE})
        j=j+1;
        console.log("inside if  and doc num "+this.inquirydat1);
          }
        }
        if(this.inquirydat1.length>1)
        {
          this.boxsize="575px";
        }
        console.log("inquirtydat1"+this.inquirydat);
        
        
      })
}
}

