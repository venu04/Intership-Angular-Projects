import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-goodsreceipt',
  templateUrl: './goodsreceipt.component.html',
  styleUrls: ['./goodsreceipt.component.css']
})
export class GoodsreceiptComponent implements OnInit {

 
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
  MAT_DOC:any;
 
  MATDOC_ITM:any;
  MATERIAL:any;
  PLANT:any;
  STGE_LOC:any;
  MOVE_TYPE:any;
  ENTRY_QNT:any;
  ENTRY_UOM:any;
  PO_PR_QNT:any;
  ORDERPR_UN:any;
  PO_NUMBER:any;
  CURRENCY:any;



  
  public products_inq: any = [];
  public inquirydat: any = [];
  public inquirydat1:any =[];
  public products: any = [];
  public userprofile: any = [];

  vendor_id=localStorage.getItem('vendor');
  vendor_name:any;
  vendor_phone:any;
  vendor_street:any;
  vendor_city: any;
  vendor_pincode: any;
  vendor_land: any;
  invoicebase64:any;
  userMail: string = '';



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
      doc.save("GOODS-RECEIPT.pdf")
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
        name:"Goods-Receipt"
     };
    const urlmail=`http://localhost:8000/sendmailattachpng`;
    this.http.post(urlmail,postDatamail).toPromise().then((data:any)=>{
        console.log(data)
  
  
        
      }).catch(err => console.error);
  
      })
    
         this._snackBar.open("mail send successfully", "close", {
      duration: 9000,});
  
    
  
      
  
  
  }
  



  
  //get data from sap 
  getInquiryData() {
    const  postData1 = {
      "VENDORID": localStorage.getItem('vendor'),
      "FLAG": "GR",
       };
    const  postData2 = {
        "VENDORID": localStorage.getItem('vendor'),
        "FLAG": "PRO",
         };
    const url = `api/vndvenu4`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        console.log('data',data);
        this.inquirydat = this.products_inq.IT_GR_ITEM.item;
        //this.inquirydat1=this.products_inq.IT_GR_ITEM.item;
        var j=0;
        for(var i=0;i<this.inquirydat.length;i++)
        {
          
         // this.docnu=this.inquirydat[i].DOC_NUMBER;
        //console.log("docnu "+this.MAT_DOC);
          console.log("Inside for "+this.inquirydat.MAT_DOC+" and "+localStorage.getItem('goodsreceiptdocnumber'));
          if(this.inquirydat[i].MAT_DOC == localStorage.getItem('goodsreceiptdocnumber'))
          {
            this.inquirydat1[j]=this.inquirydat[i]
        j=j+1;
        console.log("inside if  and doc num "+this.inquirydat1[j]);
          }
        }
        
        //console.log('inq item'+this.products_inq.IT_GR_HEAD.item);
        console.log("MAT inquirtydat"+this.inquirydat1);
        
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
  for(var i=0;i<this.inquirydat1.length;i++)
  {
    if(this.mySelect == this.inquirydat1[i].MATERIAL)
    {
      console.log("for selected value loop "+this.inquirydat1[i].MATERIAL);
      this.number=i+1;
      var mat = this.inquirydat1[i].MATERIAL;
      var item=this.inquirydat1[i].MATDOC_ITM;
      item=Number(item).toString();
      mat = Number(mat).toString();
  this.MAT_DOC = this.inquirydat1[i].MAT_DOC;
  this.MATDOC_ITM = item;
  this.MATERIAL = mat;
  this.PLANT = this.inquirydat1[i].PLANT;
  this.STGE_LOC = this.inquirydat1[i].STGE_LOC;
  this.MOVE_TYPE = this.inquirydat1[i].MOVE_TYPE;
  this.ENTRY_QNT = this.inquirydat1[i].ENTRY_QNT;
  this.ENTRY_UOM=this.inquirydat1[i].ENTRY_UOM;
  this.PO_PR_QNT=this.inquirydat1[i].PO_PR_QNT;
  this.ORDERPR_UN=this.inquirydat1[i].ORDERPR_UN;
  this.PO_NUMBER=this.inquirydat1[i].PO_NUMBER;
  this.CURRENCY=this.inquirydat1[i].CURRENCY;
    }
  }
  
}


}

