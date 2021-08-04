import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-employeefullsettlement',
  templateUrl: './employeefullsettlement.component.html',
  styleUrls: ['./employeefullsettlement.component.css']
})
export class EmployeefullsettlementComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public products: any = [];
  public userprofile: any = [];
  public products1: any = [];
  public userprofile1: any = [];
  public fsdate:any;
  public products2: any = [];
  myDate=Date.now();

  vendor_id=localStorage.getItem('employee');
  vendor_name:any;
  vendor_phone:any;
  vendor_street:any;
  vendor_city: any;
  vendor_pincode: any;
  vendor_land: any;
  costcenter: any;
  currency: any;
  eos: any;
  join:any;
  leave:any;
  pay1:any;
  pay2:any;
  pay3:any;
  tenure:any;
  public startdate:any;
public year_1:any;
public month_1:any;
public day_1:any;



  ngOnInit(): void {
    this.getData();
  }


  getData() {
    if ( !!this.fsdate.valueOf() ) { // Valid date
      this.year_1 = this.fsdate.getFullYear();
      this.month_1 = this.fsdate.getMonth();
      this.day_1 = this.fsdate.getDate();
  }
  this.startdate=this.year_1+"-"+String(Number(this.month_1)+1)+"-"+this.day_1;
  console.log("date ",this.startdate);

    console.log("auto");
    const  postData1 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>PRO</FLAG>\r\n   <FNAME/>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD></PASSWORD>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMP_V4>"
    const  postData2 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMP_PAY_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <EMPID>5016</EMPID>\r\n   <FLAG>FS</FLAG>\r\n   <MONTH>4</MONTH>\r\n   <SEQUENCE>16</SEQUENCE>\r\n   <YEAR>2018</YEAR>\r\n   <IT_ADDPAY>\r\n      <item>\r\n         <MANDT/>\r\n         <PERNR/>\r\n         <SUBTY/>\r\n         <OBJPS/>\r\n         <SPRPS/>\r\n         <ENDDA/>\r\n         <BEGDA/>\r\n         <SEQNR/>\r\n         <AEDTM/>\r\n         <UNAME/>\r\n         <HISTO/>\r\n         <ITXEX/>\r\n         <REFEX/>\r\n         <ORDEX/>\r\n         <ITBLD/>\r\n         <PREAS/>\r\n         <FLAG1/>\r\n         <FLAG2/>\r\n         <FLAG3/>\r\n         <FLAG4/>\r\n         <RESE1/>\r\n         <RESE2/>\r\n         <GRPVL/>\r\n         <LGART/>\r\n         <OPKEN/>\r\n         <BETRG/>\r\n         <WAERS/>\r\n         <ANZHL/>\r\n         <ZEINH/>\r\n         <INDBW/>\r\n         <ZDATE/>\r\n         <ZFPER/>\r\n         <ZANZL/>\r\n         <ZEINZ/>\r\n         <ZUORD/>\r\n         <UWDAT/>\r\n         <MODEL/>\r\n      </item>\r\n   </IT_ADDPAY>\r\n   <IT_BONUS>\r\n      <item>\r\n         <MANDT/>\r\n         <PERNR/>\r\n         <SUBTY/>\r\n         <OBJPS/>\r\n         <SPRPS/>\r\n         <ENDDA/>\r\n         <BEGDA/>\r\n         <SEQNR/>\r\n         <AEDTM/>\r\n         <UNAME/>\r\n         <HISTO/>\r\n         <ITXEX/>\r\n         <REFEX/>\r\n         <ORDEX/>\r\n         <ITBLD/>\r\n         <PREAS/>\r\n         <FLAG1/>\r\n         <FLAG2/>\r\n         <FLAG3/>\r\n         <FLAG4/>\r\n         <RESE1/>\r\n         <RESE2/>\r\n         <GRPVL/>\r\n         <LGART/>\r\n         <OPKEN/>\r\n         <BETRG/>\r\n         <WAERS/>\r\n         <ANZHL/>\r\n         <ZEINH/>\r\n         <INDBW/>\r\n         <ZUORD/>\r\n         <ESTDT/>\r\n         <PABRJ/>\r\n         <PABRP/>\r\n         <UWDAT/>\r\n         <ITFTT/>\r\n      </item>\r\n   </IT_BONUS>\r\n   <IT_DETAILS>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_DETAILS>\r\n   <IT_ORG>\r\n      <item>\r\n         <MANDT/>\r\n         <PERNR/>\r\n         <SUBTY/>\r\n         <OBJPS/>\r\n         <SPRPS/>\r\n         <ENDDA/>\r\n         <BEGDA/>\r\n         <SEQNR/>\r\n         <AEDTM/>\r\n         <UNAME/>\r\n         <HISTO/>\r\n         <ITXEX/>\r\n         <REFEX/>\r\n         <ORDEX/>\r\n         <ITBLD/>\r\n         <PREAS/>\r\n         <FLAG1/>\r\n         <FLAG2/>\r\n         <FLAG3/>\r\n         <FLAG4/>\r\n         <RESE1/>\r\n         <RESE2/>\r\n         <GRPVL/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <VDSK1/>\r\n         <GSBER/>\r\n         <BTRTL/>\r\n         <JUPER/>\r\n         <ABKRS/>\r\n         <ANSVH/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <PLANS/>\r\n         <STELL/>\r\n         <MSTBR/>\r\n         <SACHA/>\r\n         <SACHP/>\r\n         <SACHZ/>\r\n         <SNAME/>\r\n         <ENAME/>\r\n         <OTYPE/>\r\n         <SBMOD/>\r\n         <KOKRS/>\r\n         <FISTL/>\r\n         <GEBER/>\r\n         <FKBER/>\r\n         <GRANT_NBR/>\r\n         <SGMNT/>\r\n         <BUDGET_PD/>\r\n      </item>\r\n   </IT_ORG>\r\n   <PAYSLIP>\r\n      <item>\r\n         <FORMAT_COL/>\r\n         <TEXT_COL/>\r\n      </item>\r\n   </PAYSLIP>\r\n</ns0:ZBAPI_EMP_PAY_V4>"
    const postData3 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<ns0:ZBAPI_EMPLOYEE_PORTAL_FINAL_V4 xmlns:ns0=\"urn:sap-com:document:sap:rfc:functions\">\r\n   <ABSTYPE/>\r\n   <CITY/>\r\n   <COUNTRY/>\r\n   <DATE_END/>\r\n   <DATE_START/>\r\n   <EMPID>"+localStorage.getItem('employee')+"</EMPID>\r\n   <FLAG>FS</FLAG>\r\n   <FNAME/>\r\n   <FSDATE>"+this.startdate+"</FSDATE>\r\n   <HRS/>\r\n   <LNAME/>\r\n   <PASSWORD/>\r\n   <PHONE/>\r\n   <POSTAL/>\r\n   <SEQUENCE/>\r\n   <STREET/>\r\n   <TIME_END/>\r\n   <TIME_START/>\r\n   <IT_LEAVEBAL>\r\n      <item>\r\n         <QUOTATYPE/>\r\n         <LEAVETYPE/>\r\n         <QUOTATEXT/>\r\n         <QUOTAEND/>\r\n         <QUOTABEG/>\r\n         <ENTITLE/>\r\n         <DEDUCT/>\r\n         <ORDERED/>\r\n         <QUOTANUM/>\r\n         <TIME_UNIT/>\r\n         <TIUNITEXT/>\r\n      </item>\r\n   </IT_LEAVEBAL>\r\n   <IT_LEAVEDATA>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDATA>\r\n   <IT_LEAVEDET>\r\n      <item>\r\n         <EMPLOYEENO/>\r\n         <SUBTYPE/>\r\n         <OBJECTID/>\r\n         <LOCKINDIC/>\r\n         <VALIDEND/>\r\n         <VALIDBEGIN/>\r\n         <RECORDNR/>\r\n         <START/>\r\n         <END/>\r\n         <ABSENCETYPE/>\r\n         <NAMEOFABSENCETYPE/>\r\n         <ABSENCEDAYS/>\r\n         <ABSENCEHOURS/>\r\n      </item>\r\n   </IT_LEAVEDET>\r\n   <IT_PAYSLIP>\r\n      <item>\r\n         <SEQUENCENUMBER/>\r\n         <FPPERIOD/>\r\n         <FPBEGIN/>\r\n         <FPEND/>\r\n         <BONUSDATE/>\r\n         <PAYDATE/>\r\n         <PAYTYPE/>\r\n         <PAYID/>\r\n         <OCREASON/>\r\n         <PAYTYPE_TEXT/>\r\n         <OCREASON_TEXT/>\r\n      </item>\r\n   </IT_PAYSLIP>\r\n   <IT_PAYSLIP_HTML>\r\n      <item>\r\n         <LINE/>\r\n      </item>\r\n   </IT_PAYSLIP_HTML>\r\n   <IT_PRO>\r\n      <item>\r\n         <PERNR/>\r\n         <OTYPE/>\r\n         <BEGDA/>\r\n         <ENDDA/>\r\n         <STATUS/>\r\n         <BUKRS/>\r\n         <WERKS/>\r\n         <PERSG/>\r\n         <PERSK/>\r\n         <KOKRS/>\r\n         <KOSTL/>\r\n         <ORGEH/>\r\n         <ORGEH_TXT/>\r\n         <PLANS/>\r\n         <PLANS_TXT/>\r\n         <STELL/>\r\n         <STELL_TXT/>\r\n         <ANRED/>\r\n         <ENAME/>\r\n         <NACHN/>\r\n         <VORNA/>\r\n         <TITEL/>\r\n         <GESCH/>\r\n         <GBDAT/>\r\n         <NATIO/>\r\n         <KONFE/>\r\n         <FAMST/>\r\n         <PSTLZ/>\r\n         <ORT01/>\r\n         <STRAS/>\r\n         <LAND/>\r\n         <TELNR/>\r\n         <USRTY/>\r\n         <SYSID/>\r\n      </item>\r\n   </IT_PRO>\r\n</ns0:ZBAPI_EMPLOYEE_PORTAL_FINAL_V4>";

    const url = `api/venuv4emp`;
    const url1 = `api/venuv4emppay`;
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


      this.http.post(url1, postData2).subscribe(data => {
        this.products1 = data;
        console.log('full settlement data',data);
        console.log(this.products1); 
        this.costcenter=this.products1.COST_CENTRE;
        this.currency=this.products1.CURRENCY;
        this.eos=this.products1.EOS;
        this.join=this.products1.JOIN;
        this.leave=this.products1.LEAVE;
        this.pay1=this.products1.PAY1;
        this.pay2=this.products1.PAY2;
        this.pay3=this.products1.PAY3;
        this.tenure=this.products1.TENURE;
        console.log('costcenter',this.costcenter);
      })


      this.http.post(url2, postData3).subscribe(data => {
        this.products2 = data;
        console.log('full settlement data pr',data);
        console.log(this.products2);
        console.log('costcenter',this.costcenter);
      })

  }
  download(){
    var element = document.getElementById('invoice');
    html2canvas(element).then((canvas)=>{
      console.log(canvas);

      var imgData = canvas.toDataURL('image/png')
      console.log(imgData);
      var doc = new jspdf()
      var imgHeight = canvas.height*108/canvas.width;
      console.log('img height'+imgHeight)
      doc.addImage(imgData,0,0,208,imgHeight);
      doc.save("Final-Settlement.pdf")
    })
  }
  



}
