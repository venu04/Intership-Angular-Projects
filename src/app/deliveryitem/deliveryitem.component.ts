import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-deliveryitem',
  templateUrl: './deliveryitem.component.html',
  styleUrls: ['./deliveryitem.component.css']
})
export class DeliveryitemComponent implements OnInit {

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
  QUANTITY:any;
  deliveredquantity:any
  netweight:any;
  totalweight:any;



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
      doc.save("DELIVERY.pdf")
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
        name:"Delivery"
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
      "FLAG": "DEL",
       };
    const url1 = `api/custportalvenu4`;

 


      this.http.post(url1, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_ITEM_DEL.item;
        console.log('inq item'+this.products_inq.IT_ITEM_DEL.item);
        console.log("inquirtydat"+this.inquirydat);
        
        
        for(var i=0;i<this.inquirydat.length;i++)
        {
          this.docnu=this.inquirydat[i].VBELN;
        console.log("docnu "+this.docnu);
          console.log("Inside for "+this.inquirydat.VBELN+" and "+localStorage.getItem('delivery'));
          if(this.inquirydat[i].VBELN == localStorage.getItem('delivery'))
          {
            var mat = this.inquirydat[i].MATNR;
            mat = Number(mat).toString();
        this.DOC_NUMBER = this.inquirydat[i].VBELN;
        this.QUANTITY = this.inquirydat[i].LGMNG;
        this.deliveredquantity = this.inquirydat[i].LFIMG;
        this.MATERIAL = mat;
        this.SHORT_TEXT = this.inquirydat[i].ARKTX;
        this.netweight=this.inquirydat[i].NTGEW;
        this.totalweight=this.inquirydat[i].BRGEW;
        this.UNIT_OF_WT = this.inquirydat[i].GEWEI;

;
          }
        }
        console.log("inquirtydat1"+this.inquirydat);
        
        
      })
}






}

