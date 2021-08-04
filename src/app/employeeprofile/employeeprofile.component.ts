import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }
  public products: any = [];
  public products2:any=[];
  public userprofile: any = [];

  vendor_id=localStorage.getItem('employee');
  vendor_name:any;
  vendor_phone:any;
  vendor_street:any;
  vendor_city: any;
  vendor_pincode: any;
  vendor_land: any;



  isReadonly=true
  btn_text = "Edit"
  btn_color = "#ec171b"
  hd_color ="#ec171b"


  ngOnInit(): void {
    this.getData();
  }


  
    
  enableEdit(){
    if(this.isReadonly == true)
    {
      this.isReadonly=false
      this.btn_text="Save";
      this.btn_color="#3BB300";
      this.hd_color="#3BB300";
    }
    else{
      this.isReadonly=true
      this.btn_text="Edit"
      this.btn_color = "#ec171b"
      this.hd_color="#ec171b";
      
      const url = `api/venuv4emp`;
      const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY>"+this.vendor_city+"</CITY>\r\n   <COUNTRY>"+this.vendor_land+"</COUNTRY>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>PROUP</FLAG>\r\n   <FNAME>"+this.vendor_name+"</FNAME>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD></PASSWORD>\r\n   <PHONE>"+this.vendor_phone+"</PHONE>\r\n   <POSTAL>"+this.vendor_pincode+"</POSTAL>\r\n   <STREET>"+this.vendor_street+"</STREET>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMP_V4>"
      
     this.http.post(url, postData1).subscribe(data => {
       console.log(data);
       this._snackBar.open("Updated Successfully", "close", {
        duration: 5000,});

    })


    }
  }


  getData() {
    console.log("auto");
    const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>PRO</FLAG>\r\n   <FNAME/>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD></PASSWORD>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMP_V4>"
     const postData3 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMPLOYEE_PORTAL_FINAL_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>FS</FLAG>\r\n   <FNAME/>\r\n   <FSDATE>2020-01-01</FSDATE>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD/>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <SEQUENCE/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDATA>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDATA>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PAYSLIP_HTML>\r\n      <item>\r\n         <LINE/>\r\n      </item>\r\n   </IT_PAYSLIP_HTML>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMPLOYEE_PORTAL_FINAL_V4>";
    const url = `api/venuv4emp`;
    const url2 = `api/empportalfinalv4`;
  
    this.http.post(url, postData1).subscribe(data => {
        this.products = data;
        console.log(data);
       this.userprofile = this.products.IT_PRO.item;
        console.log('USER PROFILE',this.userprofile);
        console.log(this.products);
        this.vendor_name=this.userprofile[1].NACHN;
        this.vendor_city = this.userprofile[1].ORT01;
        this.vendor_pincode= this.userprofile[1].PSTLZ;
        this.vendor_land=this.userprofile[1].LAND;
        this.vendor_phone=this.userprofile[1].TELNR;
        this.vendor_street = this.userprofile[1].STRAS; 
      })

      this.http.post(url2, postData3).subscribe(data => {
        this.products2 = data;
        console.log('full settlement data pr',data);
        console.log(this.products2);

      })

  }
  



}
