import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {


  mySelect = '2';
  invid:any;
  date:any;
  item:any;
  price:any;
  ctype:any;
  invoicebase64:any;
  userMail: string = '';



  
  public products_inq: any = [];
  public inquirydat: any = [];

  httpClient: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }


  ngOnInit(): void {
  }
  download(){
    var element = document.getElementById('invoice');
    
    html2canvas(element).then((canvas)=>{
      console.log('canvas ',canvas);

      var imgData = canvas.toDataURL('image/png')
      this.invoicebase64=imgData;
      console.log(imgData.substring(22));

      var doc = new jspdf()
      var imgHeight = canvas.height*208/canvas.width;
      console.log('img height'+imgHeight)
      doc.addImage(imgData,0,0,208,imgHeight);
 
      doc.save("invoice.pdf")
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
      name:"Customer-Invoice"
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
      "CUSTID": localStorage.getItem('user'),
      "FLAG": "INV",
       };
    const url = `api/custportalvenu4`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_INV.item;
        console.log('inq item'+this.products_inq.IT_INV.item);
        console.log("inquirtydat"+this.inquirydat);
        
      })
}





selectChange() {
  console.log("method called")
  for(var i=0;i<this.inquirydat.length;i++)
  {
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

