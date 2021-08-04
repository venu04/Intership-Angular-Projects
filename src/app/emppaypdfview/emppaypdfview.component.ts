import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-emppaypdfview',
  templateUrl: './emppaypdfview.component.html',
  styleUrls: ['./emppaypdfview.component.css']
})
export class EmppaypdfviewComponent implements OnInit {

  
  userMail: string = '';
  p:number=1;
  searchText:any;
  load=true;
  public products_inq: any = [];
  public inquirydat: any = [];
  public products: any = [];
  public userprofile: any = [];
  public payslipdata:any =[];
  basestring:any;
  sendmailbasestring:any;
  pdfbase64:any;

  paypdf: any;
  public payslipdate:any;
  public year_1:any;
  public month_1:any;
  public day_1:any;
  public month:any;

  vendor_id=localStorage.getItem('employee');
  


  httpClient: any;
  constructor(private http: HttpClient,private router:Router,private _snackBar: MatSnackBar) { 
    this.gotoitem();
  }
  

  ngOnInit(): void {
  }
 // Table to excel
 title="export-to-excel";
 filename='PAYSLIP-LIST.xlsx';
 exportexcel()
 {
   let element=document.getElementById('exceltable');
   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
   XLSX.writeFile(wb,this.filename);
 }



gotoitem(){

  console.log("auto");
  this.year_1=localStorage.getItem('emppayyear');
  this.month_1=localStorage.getItem('emppaymonth');
  console.log(this.year_1);
  console.log(this.month_1);
  this.month=this.month_1;

   console.log("sequence month "+this.month_1);
  const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_PAYSLIP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <SEQUENCE>"+ this.month_1+"</SEQUENCE>\r\n   <IT_PAYSLIP_HTML>\r\n      <item>\r\n         <LINE/>\r\n      </item>\r\n   </IT_PAYSLIP_HTML>\r\n</ns0:ZBAPI_EMP_PAYSLIP_V4>"
  
  const url = `api/payslipsv4`;

  this.http.post(url, postData1).subscribe(data => {
      this.products = data;
      console.log(data);
      this.basestring=this.products.BASE64;
      this.sendmailbasestring=this.products.BASE64;

      this.pdfbase64=atob(this.basestring);
      this.payslipdata.push({arr:this.basestring});
      this.paypdf= `data:application/pdf;base64,${this.basestring}`;
      
      //console.log(this.pdfbase64);

      console.log('basestring ',this.paypdf);
    })

  //console.log("current item "+localStorage.getItem('delivery'));
 // this.router.navigateByUrl('/deliveryitem');
  
}
download()
{
  var monn=localStorage.getItem('empmonthdown');
  
  const downloadLink = document.createElement("a");
  const fileName = monn+"-"+this.year_1+"-paypdf.pdf";
  downloadLink.href = this.paypdf;
  downloadLink.download = fileName;
  downloadLink.click(); 
}
sendmail()
{
  console.log("user send mail",this.userMail);
  console.log("stringbase",this.sendmailbasestring)
  const  postDatamail = {
      tomail: this.userMail,
      sub: this.sendmailbasestring,
      name:"payslip"
   };
  const urlmail=`http://localhost:8000/sendmailattach`;
  this.http.post(urlmail,postDatamail).toPromise().then((data:any)=>{
      console.log(data)


      
    }).catch(err => console.error);

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
