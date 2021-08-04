import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-goodsreceipthead',
  templateUrl: './goodsreceipthead.component.html',
  styleUrls: ['./goodsreceipthead.component.css']
})
export class GoodsreceiptheadComponent implements OnInit {

  userMail: string = '';
  p:number=1;
  searchText:any;
  load=true;
  public products_inq: any = [];
  public inquirydat: any = [];
  public inquirydat1: any = [];

  httpClient: any;
  constructor(private http: HttpClient,private router:Router,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }
  

  ngOnInit(): void {
  }
  // Table to excel
  title="export-to-excel";
  filename='Goods-Receipt.xlsx';
  exportexcel()
  {
    let element=document.getElementById('exceltable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
    XLSX.writeFile(wb,this.filename);
  }

  //get data from sap 
  getInquiryData() {
    const  postData1 = {
      "VENDORID": localStorage.getItem('vendor'),
      "FLAG": "GR",
       };
       const url = `api/vndvenu4`;

       this.http.post(url, postData1).subscribe(data => {
           this.products_inq = data;
           console.log('data',data);
           this.inquirydat = this.products_inq.IT_GR_HEAD.item;
           this.inquirydat1=this.products_inq.IT_GR_ITEM.item;
           console.log('inq item'+this.products_inq.IT_GR_HEAD.item);
           console.log("inquirtydat"+this.inquirydat1);
           
         })
   
}
sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"Goods-Receipt"
     };
  const url = `http://localhost:8000/sendmailattachxml`;

  this.http.post(url, postData1).subscribe(data => {
     console.log("send successfully");
      
    })
    this._snackBar.open("mail send successfully", "close", {
      duration: 9000,});
 }


gotoitem(data){
  console.log("goto item data "+data.MAT_DOC);
  localStorage.setItem('goodsreceiptdocnumber',data.MAT_DOC);
  console.log("current item "+localStorage.getItem('goodsreceiptdocnumber'));
  this.router.navigateByUrl('/goodsreceipt');
  
}
key='id';
reverse:boolean=false;
sort(key){
  this.key=key;

  this.reverse=!this.reverse;
}

}


