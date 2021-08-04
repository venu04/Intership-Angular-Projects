import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthGuard1 } from './auth1.guard';
import { AuthGuard2 } from './auth2.guard';
import {ProfileviewComponent} from './profileview/profileview.component';
import { InquiryDataComponent } from './inquiry-data/inquiry-data.component';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { OverallSalesComponent } from './overall-sales/overall-sales.component';
import { CreditComponent } from './credit/credit.component';
import { PaymentsComponent } from './payments/payments.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { LstmComponent } from './lstm/lstm.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { RFQComponent } from './rfq/rfq.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { VendorinvoiceComponent } from './vendorinvoice/vendorinvoice.component';
import { VendorpaymentComponent } from './vendorpayment/vendorpayment.component';
import { VendorcreditComponent } from './vendorcredit/vendorcredit.component';
import { VendorpocreateComponent } from './vendorpocreate/vendorpocreate.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { EmployeeleavehistoryComponent } from './employeeleavehistory/employeeleavehistory.component';
import { EmployeeleaveavailComponent } from './employeeleaveavail/employeeleaveavail.component';
import { EmployeeleaverequestComponent } from './employeeleaverequest/employeeleaverequest.component';
import { EmployeepayslipComponent } from './employeepayslip/employeepayslip.component';
import { CustcreateComponent } from './custcreate/custcreate.component';
import { EmployeefullsettlementComponent } from './employeefullsettlement/employeefullsettlement.component';
import { InquiryitemdataComponent } from './inquiryitemdata/inquiryitemdata.component';
import { DeliveryitemComponent } from './deliveryitem/deliveryitem.component';
import { RfqitemComponent } from './rfqitem/rfqitem.component';
import { EmppaypdfviewComponent } from './emppaypdfview/emppaypdfview.component';
import { VendorinvoicepdfComponent } from './vendorinvoicepdf/vendorinvoicepdf.component';
import { CustforgetpasswordComponent } from './custforgetpassword/custforgetpassword.component';
import { CustemailComponent } from './custemail/custemail.component';
import { EntercustemailotpComponent } from './entercustemailotp/entercustemailotp.component';
import { VendorentermailComponent } from './vendorentermail/vendorentermail.component';
import { VendorenterotpComponent } from './vendorenterotp/vendorenterotp.component';
import { VendorchangepasswordComponent } from './vendorchangepassword/vendorchangepassword.component';
import { EnterempmailComponent } from './enterempmail/enterempmail.component';
import { EnterempotpComponent } from './enterempotp/enterempotp.component';
import { EmpchangepasswordComponent } from './empchangepassword/empchangepassword.component';
import { GoodsreceiptheadComponent } from './goodsreceipthead/goodsreceipthead.component';
import { PurchaseorderheadComponent } from './purchaseorderhead/purchaseorderhead.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'dashboard',canActivate:[AuthGuard],
    component:DashboardComponent
  },
  {
    path:'home',
    component: LandingpageComponent
  },
  {
    path:'createCustomer',
    component: CustcreateComponent
  },
  {
    path:'customerforgetpassword',
    component: CustforgetpasswordComponent
  },
  {
    path:'customerenterotp',
    component: EntercustemailotpComponent
  },
  {
    path:'custforgetpassword',
    component: CustemailComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'vendorlogin',
    component: VendorloginComponent
  },
  {
    path:'vendorentermail',
    component: VendorentermailComponent
  },
  {
    path:'vendorenterotp',
    component: VendorenterotpComponent
  },
  {
    path:'vendorchangepassword',
    component: VendorchangepasswordComponent
  },

  {
    path:'vendorhomepage',canActivate:[AuthGuard1],
    component:ProfileviewComponent
  },
  {
    path:'homepage',canActivate:[AuthGuard],
    component: HomepageComponent
  },
  {
    path: 'inquiry',canActivate:[AuthGuard],
    component:InquiryDataComponent
  },
  {
    path: 'inquiryitem',canActivate:[AuthGuard],
    component:InquiryitemdataComponent
  },
  {
    path: 'deliveryitem',canActivate:[AuthGuard],
    component:DeliveryitemComponent
  },
  {
    path:'saleorder',canActivate:[AuthGuard],
    component:SaleOrderComponent
  },
  {
    path:'delivery',canActivate:[AuthGuard],
    component:DeliveryComponent
  },
  {
    path:'invoice',canActivate:[AuthGuard],
    component:InvoiceComponent
  },
  {
    path:'payments',canActivate:[AuthGuard],
    component:PaymentsComponent
  },
  {
    path:'credit',canActivate:[AuthGuard],
    component:CreditComponent
  },
  {
    path:'overallSales',canActivate:[AuthGuard],
    component:OverallSalesComponent
  },
  {
    path:'getin',canActivate:[AuthGuard],
    component:GetintouchComponent
  },
  {
      path:'lstm',canActivate:[AuthGuard],
      component:LstmComponent
  },
  {
      path:'purchaseOrder',canActivate:[AuthGuard1],
      component:PurchaseorderComponent
  },
  {
    path:'purchaseOrderhead',canActivate:[AuthGuard1],
    component:PurchaseorderheadComponent
},
  {
    path:'rfq',canActivate:[AuthGuard1],
    component:RFQComponent
},
{
  path:'rfqitem',canActivate:[AuthGuard1],
  component:RfqitemComponent
},
{
  path:'goodsreceipt',canActivate:[AuthGuard1],
  component:GoodsreceiptComponent
},
{
  path:'goodsreceipthead',canActivate:[AuthGuard1],
  component:GoodsreceiptheadComponent
},
{
  path:'vendorinvoice',canActivate:[AuthGuard1],
  component:VendorinvoiceComponent
},
{
  path:'vendorinvoicepdf',canActivate:[AuthGuard1],
  component:VendorinvoicepdfComponent
},
{
  path:'vendorpayment',canActivate:[AuthGuard1],
  component:VendorpaymentComponent
},
{
  path:'vendorcredit',canActivate:[AuthGuard1],
  component:VendorcreditComponent
},
{
  path:'pocreate',canActivate:[AuthGuard1],
  component:VendorpocreateComponent
},
{
  path:'emplogin',
  component:EmployeeloginComponent
},
{
  path:'emphomepage',canActivate:[AuthGuard2],
  component:EmployeeprofileComponent
},
{
  path:'empentermail',
  component:EnterempmailComponent
},
{
  path:'empenterotp',
  component:EnterempotpComponent
},
{
  path:'empchangepassword',
  component:EmpchangepasswordComponent
},
{
  path:'empleavehistory',canActivate:[AuthGuard2],
  component:EmployeeleavehistoryComponent
},
{
  path:'empleavebalance',canActivate:[AuthGuard2],
  component:EmployeeleaveavailComponent
},
{
  path:'empleaverequest',canActivate:[AuthGuard2],
  component:EmployeeleaverequestComponent
},
{
  path:'emppayslip',canActivate:[AuthGuard2],
  component:EmployeepayslipComponent
},
{
  path:'emppayslippdf',canActivate:[AuthGuard2],
  component:EmppaypdfviewComponent
},
{
  path:'empfullsettlement',canActivate:[AuthGuard2],
  component:EmployeefullsettlementComponent
},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
