import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  httpClient:any;   
  public output=[];
  passtype:string = "password";
  passicon:string = "fas fa-eye";
  name: string = '';
  password: string = '';
  showError = false
  showError1 = false
  loader="normal";
  constructor(public service:HttpService,public http: HttpClient,private router:Router,private auth:AuthService) { 
    //this.loginUser();
  }



  ngOnInit(): void {
  }
  loginUser()
  {
    console.log("emp name",this.name);
    this.loader = "active";
    if(this.name=="" || this.password=="")
    {
      this.loader="normal";
      this.showError = true;
      this.router.navigate[("/emplogin")];
    }
    else
    {
      this.showError=false
      this.showError1=false
      const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+this.name+"</EMPID>\r\n   <FLAG>LO</FLAG>\r\n   <FNAME/>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD>"+this.password+"</PASSWORD>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMP_V4>"
      const url=`api/venuv4emp`;
      
      this.http.post(url,postData1).toPromise().then((data:any)=>{
          this.loader="normal";
          console.log(data)
          status=data.RETURN.MESSAGE;
          console.log('STATUS',status)
          if(status=='INVALID')
          {
            this.showError1=true;
            this.router.navigateByUrl('/emplogin');
          }
          else if(status=='SUCCESS')
          {
            localStorage.setItem('employee',this.name);
            this.router.navigateByUrl('/emphomepage');
            console.log("employee",localStorage.getItem('employee'));
          }
          else if(status=='ERROR')
          {
            this.showError1=true;
            this.router.navigateByUrl('/emplogin');
          }
        }).catch(err => console.error);
    }
}

togglePassword(){
  if(this.passtype === "password")
  {
    this.passtype = "text";
    this.passicon = "fas fa-eye-slash";
  }
  else
  {
    this.passtype = "password";
    this.passicon = "fas fa-eye";
  } 
}
forgetpassword(){
  this.router.navigateByUrl('/empentermail');
}


}
