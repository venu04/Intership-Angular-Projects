import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-overall-sales',
  templateUrl: './overall-sales.component.html',
  styleUrls: ['./overall-sales.component.css']
})
export class OverallSalesComponent implements OnInit {

  
  p:number=1;
  searchText:any;
  load=true;
  userMail: string = '';
  public products_inq: any = [];
  public inquirydat: any = [];

  httpClient: any;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }
  

  ngOnInit(): void {
  }


  // Table to excel
  title="export-to-excel";
  filename='OVERALL-SALES.xlsx';
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
     };
  const url = `api/custoverallvenu4`;

  this.http.post(url, postData1).subscribe(data => {
      this.products_inq = data;
      this.inquirydat = this.products_inq.IT_OVERALL.item;
      console.log('inq item'+this.products_inq.IT_OVERALL.item);
      console.log("inquirtydat"+this.inquirydat);
      this.load=false;
    })
}
sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"over-all-sales"
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