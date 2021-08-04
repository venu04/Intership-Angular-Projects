import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-inquiry-data',
  templateUrl: './inquiry-data.component.html',
  styleUrls: ['./inquiry-data.component.css']
})
export class InquiryDataComponent implements OnInit {

  userMail: string = '';
  p:number=1;
  searchText:any;
  load=true;
  public products_inq: any = [];
  public inquirydat: any = [];
  public inquirydat1: any = [];
  public products_inq_new: any = [];
  public inquirydat_new: any = [];
  public inquirydat1_new: any = [];

  httpClient: any;
  constructor(private http: HttpClient,private router:Router,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }
  

  ngOnInit(): void {
  }
  // Table to excel
  title="export-to-excel";
  filename='INQUIRY.xlsx';
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
      "CUSTID": localStorage.getItem('user'),
      "FLAG": "INQ",
       };
    const url1 = `api/custportalvenu4`;

 


      this.http.post(url1, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_ITEM_INQD.item;
        this.inquirydat1 = this.products_inq.IT_HEAD_INQD.item;
        console.log('inq item'+this.products_inq.IT_ITEM_INQD.item);
        console.log("inquirtydat"+this.inquirydat);
        console.log("inquirtydat1"+this.inquirydat1);
        this.load=false;
        
      })
}
gotoitem(data){
  console.log("goto item data "+data.DOC_NUMBER);
  localStorage.setItem('docnumber',data.DOC_NUMBER);
  console.log("current item "+localStorage.getItem('docnumber'));
  this.router.navigateByUrl('/inquiryitem');
  
}
sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat1,
    "tomail":this.userMail,
    "name":"Inquiry"
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


  
