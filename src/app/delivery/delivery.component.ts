import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

 
  userMail: string = '';
  p:number=1;
  searchText:any;
  load=true;
  public products_inq: any = [];
  public inquirydat: any = [];

  httpClient: any;
  constructor(private http: HttpClient,private router:Router,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
  }
  

  ngOnInit(): void {
  }
 // Table to excel
 title="export-to-excel";
 filename='DELIVERY.xlsx';
 exportexcel()
 {
   let element=document.getElementById('exceltable');
   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
   XLSX.writeFile(wb,this.filename);
 }
 sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"delivery"
     };
  const url = `http://localhost:8000/sendmailattachxml`;

  this.http.post(url, postData1).subscribe(data => {
     console.log("send successfully");
      
    })
    this._snackBar.open("mail send successfully", "close", {
      duration: 9000,});
 }


  //get data from sap 
  getInquiryData() {
    const  postData1 = {
      "CUSTID": localStorage.getItem('user'),
      "FLAG": "DEL",
       };
    const url = `api/custportalvenu4`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_HEAD_DEL.item;
        console.log('inq item'+this.products_inq.IT_HEAD_DEL.item);
        console.log("inquirtydat"+this.inquirydat);
        this.load=false;
        
      })
}
gotoitem(data){
  console.log("goto item data "+data.VBELN);
  localStorage.setItem('delivery',data.VBELN);
  console.log("current item "+localStorage.getItem('delivery'));
  this.router.navigateByUrl('/deliveryitem');
  
}
key='id';
reverse:boolean=false;
sort(key){
  this.key=key;

  this.reverse=!this.reverse;
}

}


  

 

