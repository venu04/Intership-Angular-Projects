import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-vendorcredit',
  templateUrl: './vendorcredit.component.html',
  styleUrls: ['./vendorcredit.component.css']
})
export class VendorcreditComponent implements OnInit {

  userMail: string = '';
  userMail1: string = '';
  p:number=1;
  searchText:any;
  searchText1:any;
  load=true;
  public products_inq: any = [];
  public inquirydat: any = [];
  public products_inq1: any = [];
  public inquirydat1: any = [];
  public crddbtdata: any = [];
  public belnrdata: any = [];
  public belnrdata1: any = [];
  len = 0;

  httpClient: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }
  

  ngOnInit(): void {
  }
  // Table to excel
  title="export-to-excel";
  filename='VENDOR-CREDIT-DEBIT.xlsx';
  exportexcel()
  {
    let element=document.getElementById('exceltable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
    XLSX.writeFile(wb,this.filename);
  }
  
  exportexcel1()
  {
    let element=document.getElementById('exceltable1');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
    XLSX.writeFile(wb,'DEBIT.xlsx');
  }



  //get data from sap 
  getInquiryData() {
    const  postData1 = {
      "VENDORID": localStorage.getItem('vendor'),
      "FLAG": "CRD",
       };
    const url = `api/vndvenu4`;

    this.http.post(url, postData1).subscribe(data => {
      this.load=false;
        this.products_inq = data;
        console.log(data);
        this.inquirydat = this.products_inq.IT_CRD.item;
        this.inquirydat1 = this.products_inq.IT_DEB.item;

        console.log('inq item'+this.products_inq.IT_DEB.item);
        console.log("inquirtydat"+this.inquirydat);
        for(var i=0;i<this.inquirydat1.length;i++)
        {
         if(this.inquirydat1[i].KOART == "D")
         {
           this.inquirydat1[i].KOART = "D (Customer)"
         }
         else if(this.inquirydat1[i].KOART == "S")
         {
           this.inquirydat1[i].KOART = "S (General Ledger)"
         }
         else if(this.inquirydat1[i].KOART == "A")
         {
           this.inquirydat1[i].KOART = "A (Asset)"
         }
         else if(this.inquirydat1[i].KOART == "K")
         {
           this.inquirydat1[i].KOART = "K (Vendor)"
         }
         else if(this.inquirydat1[i].KOART == "M")
         {
           this.inquirydat1[i].KOART = "M (Material)"
         }
         this.inquirydat1[i].SHKZG = "S (DEBIT)";
          //console.log("data "+this.inquirydat[i]);
          console.log("date"+this.inquirydat1[i].AUGDT);
        }
        for(var i=0;i<this.inquirydat.length;i++)
        {
         if(this.inquirydat[i].KOART == "D")
         {
           this.inquirydat[i].KOART = "D (Customer)"
         }
         else if(this.inquirydat[i].KOART == "S")
         {
           this.inquirydat[i].KOART = "S (General Ledger)"
         }
         else if(this.inquirydat[i].KOART == "A")
         {
           this.inquirydat[i].KOART = "A (Asset)"
         }
         else if(this.inquirydat[i].KOART == "K")
         {
           this.inquirydat[i].KOART = "K (Vendor)"
         }
         else if(this.inquirydat[i].KOART == "M")
         {
           this.inquirydat[i].KOART = "M (Material)"
         }
         this.inquirydat[i].SHKZG = "H (CREDIT)";
          //console.log("data "+this.inquirydat[i]);
          console.log("date"+this.inquirydat1[i].AUGDT);
        }
       
        this.load=false;
      })
    

}
sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"Credit-Memo"
     };
  const url = `http://localhost:8000/sendmailattachxml`;

  this.http.post(url, postData1).subscribe(data => {
     console.log("send successfully");
      
    })
    this._snackBar.open("mail send successfully", "close", {
      duration: 9000,});
 }

 sendmail1()
 {
   const  postData1 = {
    "todata": this.inquirydat1,
    "tomail":this.userMail1,
    "name":"Debit-Memo"
     };
  const url = `http://localhost:8000/sendmailattachxml`;

  this.http.post(url, postData1).subscribe(data => {
     console.log("send successfully");
      
    })
    this._snackBar.open("mail send successfully", "close", {
      duration: 9000,});
 }

key='id';
reverse:boolean=false;
sort(key){
  this.key=key;

  this.reverse=!this.reverse;
}

}


  

 

