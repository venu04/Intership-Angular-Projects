import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css']
})
export class PurchaseorderComponent implements OnInit {

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
  materialno:any;
  PO_NUMBER:any;
  SHORT_TEXT:any;
  QUANTITY:any;
  boxsize="390px";




  
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
  MATERIAL:any;
  MAT_GRP:any;
  UNIT:any;
  NET_PRICE:any;
  GROS_VALUE:any;
  CO_CODE:any;
  PLANT:any;
  INFO_REC:any;
  tcount=0;
  PRICE_DATE:any;


  httpClient: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar
    ) { 
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
      doc.save("PURCHASE-ORDER.pdf")
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
        name:"Purchase-Order"
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
      "FLAG": "PO",
       };
    const  postData2 = {
        "VENDORID": localStorage.getItem('vendor'),
        "FLAG": "PRO",
         };
    const url = `api/vndvenu4`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        console.log('data',data);
        this.inquirydat=this.products_inq.IT_PO_ITEM.item;
        console.log('inq item'+this.products_inq.IT_PO_HEAD.item);
        console.log("inquirtydat"+this.inquirydat);
        
        var j=1;
        for(var i=0;i<this.inquirydat.length;i++)
        {
          //this.ponumber=this.inquirydat[i].PO_NUMBER;
          //this.PO_NUMBER=this.inquirydat[i].PO_NUMBER;
        console.log("docnu "+this.PO_NUMBER);
          if(this.inquirydat[i].PO_NUMBER == localStorage.getItem('vendorpurchaseordernumber'))
          {
            console.log("Inside for "+this.inquirydat[i].PO_NUMBER+" and "+localStorage.getItem('vendorpurchaseordernumber'));
          
            var mat = this.inquirydat[i].MATERIAL;
            //var item=this.inquirydat[i].DOC_ITEM;
            //item=Number(item).toString();
            mat = Number(mat).toString();
        this.PRICE_DATE=this.inquirydat[i].PRICE_DATE;
        this.PO_NUMBER = this.inquirydat[i].PO_NUMBER;
        this.PLANT=this.inquirydat[i].PLANT;
        this.INFO_REC=this.inquirydat[i].INFO_REC;
        //this.DOC_ITEM = item;
        this.CO_CODE=this.inquirydat[i].CO_CODE;
        this.MATERIAL = mat;
        this.SHORT_TEXT = this.inquirydat[i].SHORT_TEXT;
        this.MAT_GRP = this.inquirydat[i].MAT_GRP;
        this.QUANTITY = this.inquirydat[i].QUANTITY;
        this.UNIT = this.inquirydat[i].UNIT;
        this.GROS_VALUE = this.inquirydat[i].GROS_VALUE;
        this.NET_PRICE = this.inquirydat[i].NET_PRICE.split(".")[0];
        this.inquirydat1.push({tcount:j,PO_NUMBER:this.PO_NUMBER,PLANT:this.PLANT,
          INFO_REC:this.INFO_REC,CO_CODE:this.CO_CODE,MATERIAL:this.MATERIAL,
          SHORT_TEXT:this.SHORT_TEXT,MAT_GRP:this.MAT_GRP,NET_PRICE:this.NET_PRICE,
          QUANTITY:this.QUANTITY,UNIT:this.UNIT,GROS_VALUE:this.GROS_VALUE,
        })
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
    if(this.mySelect == this.inquirydat[i].PO_NUMBER)
    {
      console.log("for selected value loop"+this.inquirydat[i].PO_NUMBER);
      this.number=i+1;
      this.materialno=this.inquirydat[i].MATERIAL;
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
      console.log("material no ",this.materialno);
    }
  }
  
}


}

