import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-employeepayslip',
  templateUrl: './employeepayslip.component.html',
  styleUrls: ['./employeepayslip.component.css']
})
export class EmployeepayslipComponent implements OnInit {

  userMail: string = '';
  p:number=1;
  searchText:any;
  load=true;
  public products_inq: any = [];
  public inquirydat: any = [];
  public products: any = [];
  public userprofile: any = [];
  basestring:any;
  pdfbase64:any;

  paypdf: any;
  public payslipdate:any;
  public year_1:any;
  public month_1:any;
  public day_1:any;

  vendor_id=localStorage.getItem('employee');
  


  httpClient: any;
  constructor(private http: HttpClient,private router:Router,private _snackBar: MatSnackBar) { 
    this.getInquiryData();
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


  //get data from sap 
  getInquiryData() {
    const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_PAY_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>FS</FLAG>\r\n   <MONTH>4</MONTH>\r\n   <SEQUENCE>16</SEQUENCE>\r\n   <YEAR>2018</YEAR>\r\n   <IT_ADDPAY>\r\n      <item>\r\n         <MANDT/>\r\n         <PERNR/>\r\n         <SUBTY/>\r\n         <OBJPS/>\r\n         <SPRPS/>\r\n         <ENDDA/>\r\n         <BEGDA/>\r\n         <SEQNR/>\r\n         <AEDTM/>\r\n         <UNAME/>\r\n         <HISTO/>\r\n         <ITXEX/>\r\n         <REFEX/>\r\n         <ORDEX/>\r\n         <ITBLD/>\r\n         <PREAS/>\r\n         <FLAG1/>\r\n         <FLAG2/>\r\n         <FLAG3/>\r\n         <FLAG4/>\r\n         <RESE1/>\r\n         <RESE2/>\r\n         <GRPVL/>\r\n         <LGART/>\r\n         <OPKEN/>\r\n         <BETRG/>\r\n         <WAERS/>\r\n         <ANZHL/>\r\n         <ZEINH/>\r\n         <INDBW/>\r\n         <ZDATE/>\r\n         <ZFPER/>\r\n         <ZANZL/>\r\n         <ZEINZ/>\r\n         <ZUORD/>\r\n         <UWDAT/>\r\n         <MODEL/>\r\n      </item>\r\n   </IT_ADDPAY>\r\n   <IT_BONUS>\r\n      <item>\r\n         <MANDT/>\r\n         <PERNR/>\r\n         <SUBTY/>\r\n         <OBJPS/>\r\n         <SPRPS/>\r\n         <ENDDA/>\r\n         <BEGDA/>\r\n         <SEQNR/>\r\n         <AEDTM/>\r\n         <UNAME/>\r\n         <HISTO/>\r\n         <ITXEX/>\r\n         <REFEX/>\r\n         <ORDEX/>\r\n         <ITBLD/>\r\n         <PREAS/>\r\n         <FLAG1/>\r\n         <FLAG2/>\r\n         <FLAG3/>\r\n         <FLAG4/>\r\n         <RESE1/>\r\n         <RESE2/>\r\n         <GRPVL/>\r\n         <LGART/>\r\n         <OPKEN/>\r\n         <BETRG/>\r\n         <WAERS/>\r\n         <ANZHL/>\r\n         <ZEINH/>\r\n         <INDBW/>\r\n         <ZUORD/>\r\n         <ESTDT/>\r\n         <PABRJ/>\r\n         <PABRP/>\r\n         <UWDAT/>\r\n         <ITFTT/>\r\n      </item>\r\n   </IT_BONUS>\r\n   <IT_DETAILS>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_DETAILS>\r\n   <IT_ORG>\r\n      <item>\r\n         <MANDT/>\r\n         <PERNR/>\r\n         <SUBTY/>\r\n         <OBJPS/>\r\n         <SPRPS/>\r\n         <ENDDA/>\r\n         <BEGDA/>\r\n         <SEQNR/>\r\n         <AEDTM/>\r\n         <UNAME/>\r\n         <HISTO/>\r\n         <ITXEX/>\r\n         <REFEX/>\r\n         <ORDEX/>\r\n         <ITBLD/>\r\n         <PREAS/>\r\n         <FLAG1/>\r\n         <FLAG2/>\r\n         <FLAG3/>\r\n         <FLAG4/>\r\n         <RESE1/>\r\n         <RESE2/>\r\n         <GRPVL/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <VDSK1/>\r\n         <GSBER/>\r\n         <BTRTL/>\r\n         <JUPER/>\r\n         <ABKRS/>\r\n         <ANSVH/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <PLANS/>\r\n         <STELL/>\r\n         <MSTBR/>\r\n         <SACHA/>\r\n         <SACHP/>\r\n         <SACHZ/>\r\n         <SNAME/>\r\n         <ENAME/>\r\n         <OTYPE/>\r\n         <SBMOD/>\r\n         <KOKRS/>\r\n         <FISTL/>\r\n         <GEBER/>\r\n         <FKBER/>\r\n         <GRANT_NBR/>\r\n         <SGMNT/>\r\n         <BUDGET_PD/>\r\n      </item>\r\n   </IT_ORG>\r\n   <PAYSLIP>\r\n      <item>\r\n         <FORMAT_COL/>\r\n         <TEXT_COL/>\r\n      </item>\r\n   </PAYSLIP>\r\n</ns0:ZBAPI_EMP_PAY_V4>"
    const url = `api/venuv4emppay`;

    this.http.post(url, postData1).subscribe(data => {
        this.products_inq = data;
        this.inquirydat = this.products_inq.IT_DETAILS.item;
        console.log('inq item'+this.products_inq.IT_DETAILS.item);
        console.log("inquirtydat"+this.inquirydat);
        this.load=false;
        
      })
}

gotoitem(data){
// if ( !!this.payslipdate.valueOf() ) { // Valid date
//     this.year_1 = this.payslipdate.getFullYear();
//     this.month_1 = this.payslipdate.getMonth();
//     this.day_1 = this.payslipdate.getDate();
// }
// if(this.year_1 == "2015")
// {
//   this.month_1 = this.month_1+1;
// }
// else
// {
//   this.month_1 = this.month_1+13;
// }
console.log("goto item data "+data.FPBEGIN);
// localStorage.setItem('delivery',data.VBELN);
  console.log("auto");
  this.year_1=data.FPBEGIN.split("-")[0];
  this.month_1=data.FPBEGIN.split("-")[1];
  console.log(this.year_1);
  console.log(this.month_1);
  var month=this.month_1;
  if(this.year_1 == "2015")
   {
        this.month_1 = this.month_1;
   }
   else
   {

     this.month_1 = Number(this.month_1)+(12*(Number(this.year_1)-2015));
   }
   localStorage.setItem('emppayyear',this.year_1);
   localStorage.setItem('empmonthdown',month);
   localStorage.setItem('emppaymonth',this.month_1);
   console.log("sequence month "+this.month_1);
   this.router.navigateByUrl('/emppayslippdf');

  // const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_PAYSLIP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <SEQUENCE>"+ this.month_1+"</SEQUENCE>\r\n   <IT_PAYSLIP_HTML>\r\n      <item>\r\n         <LINE/>\r\n      </item>\r\n   </IT_PAYSLIP_HTML>\r\n</ns0:ZBAPI_EMP_PAYSLIP_V4>"
  
  // const url = `api/payslipsv4`;

  // this.http.post(url, postData1).subscribe(data => {
  //     this.products = data;
  //     console.log(data);
  //     this.basestring=this.products.BASE64;

  //     this.pdfbase64=atob(this.basestring);
  //     this.paypdf= `data:application/pdf;base64,${this.basestring}`;
  //     const downloadLink = document.createElement("a");
  //     const fileName = month+"-"+this.year_1+"-paypdf.pdf";
  //     downloadLink.href = this.paypdf;
  //     downloadLink.download = fileName;
  //     downloadLink.click();
  //     //console.log(this.pdfbase64);

  //     console.log('basestring ',this.paypdf);
    //})

  //console.log("current item "+localStorage.getItem('delivery'));
 // this.router.navigateByUrl('/deliveryitem');
  
}

sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"Payslip-List"
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
