import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employeeleavehistory',
  templateUrl: './employeeleavehistory.component.html',
  styleUrls: ['./employeeleavehistory.component.css']
})
export class EmployeeleavehistoryComponent implements OnInit {

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
  }  // Table to excel
  title="export-to-excel";
  filename='LEAVE-HISTORY.xlsx';
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
  const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>LD</FLAG>\r\n   <FNAME/>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD></PASSWORD>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMP_V4>"
  const url = `api/venuv4emp`;

  this.http.post(url, postData1).subscribe(data => {
      this.products_inq = data;
      console.log(data);
      this.inquirydat = this.products_inq.IT_LEAVEDET.item;
      console.log('inq item'+this.products_inq.IT_LEAVEDET.item);
      console.log("inquirtydat"+this.inquirydat);
      this.load=false;
    })
}

sendmail()
 {
   const  postData1 = {
    "todata": this.inquirydat,
    "tomail":this.userMail,
    "name":"Leave-History"
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






