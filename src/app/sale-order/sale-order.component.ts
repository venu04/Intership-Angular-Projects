import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sale-order',
  templateUrl: './sale-order.component.html',
  styleUrls: ['./sale-order.component.css']
})
export class SaleOrderComponent implements OnInit {

  userMail: string = '';
  p:number=1;
  searchText:any;
  load=true;
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
  filename='SALES-ORDER.xlsx';
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
      "FLAG": "SAL",
       };
    const url = `api/custportalvenu`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        console.log("data"+data);
        console.log("products"+this.products_inq)
        this.inquirydat = this.products_inq.IT_SAL.item;
        console.log('sales item'+this.products_inq.IT_SAL.item);
        console.log("inquirtydat"+this.inquirydat);
        this.load=false;
      })
}
sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"sale-order"
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


  






export interface PeriodicElement {
  position: number;
  name:String;
  weight:number;
  symbol:String;
  item:String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',item:'SALES'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',item:'1'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',item:'1'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',item:'1'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',item:'1'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',item:'1'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',item:'1'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',item:'1'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',item:'1'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',item:'1'},
];

