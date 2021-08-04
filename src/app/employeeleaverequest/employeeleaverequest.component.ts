import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employeeleaverequest',
  templateUrl: './employeeleaverequest.component.html',
  styleUrls: ['./employeeleaverequest.component.css']
})
export class EmployeeleaverequestComponent implements OnInit {

  public year_1:any;
  public year_2:any;
  public month_1:any;
  public month_2:any;
  public day_1:any;
  public day_2:any;
  public emp_fday:any;
  public emp_lday:any;
  public startdate:any;
  public  enddate:any;
  public abstype:any;
  public hrs:any;
  public emp_id=localStorage.getItem('employee');
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  getData() {
    if ( !!this.emp_fday.valueOf() ) { // Valid date
      this.year_1 = this.emp_fday.getFullYear();
      this.month_1 = this.emp_fday.getMonth();
      this.day_1 = this.emp_fday.getDate();
  }
  this.startdate=this.year_1+"-"+String(Number(this.month_1)+1)+"-"+this.day_1;
  if ( !!this.emp_lday.valueOf() ) { // Valid date
    this.year_2 = this.emp_lday.getFullYear();
    this.month_2 = this.emp_lday.getMonth();
    this.day_2 = this.emp_lday.getDate();
  }
  this.enddate=this.year_2+"-"+String(Number(this.month_2)+1)+"-"+this.day_2;
  
  console.log("start date: ",this.startdate);
  console.log("end date: ",this.enddate);
  console.log("Abs TYPE: ",this.abstype);
  console.log("hrs: ",this.hrs);

  const url = `api/venuv4emp`;
  const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE>1004</ABSTYPE>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END>"+this.enddate+"</DATE_END>\r\n   <DATE_START>"+this.startdate+"</DATE_START>\r\n   <EMPID>"+this.emp_id+"</EMPID>\r\n   <FLAG>LC</FLAG>\r\n   <FNAME/>\r\n   <HRS>1.00</HRS>\r\n   <LNAME/>\r\n   <PASSWORD>PASS5017</PASSWORD>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMP_V4>";
 this.http.post(url, postData1).subscribe(data => {
   console.log(data);
   this._snackBar.open("Leave Request Created Successfully", "close", {
duration: 5000,});

})




  }
  



}


