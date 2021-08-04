import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { AuthGuard } from './auth.guard';
import { InquiryDataComponent } from './inquiry-data/inquiry-data.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SaleOrderComponent } from './sale-order/sale-order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PaymentsComponent } from './payments/payments.component';
import { CreditComponent } from './credit/credit.component';
import { OverallSalesComponent } from './overall-sales/overall-sales.component';
import { NzTableModule } from 'ng-zorro-antd/table';

import {MatTableModule} from '@angular/material/table';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LstmComponent } from './lstm/lstm.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { RFQComponent } from './rfq/rfq.component';
import { GoodsreceiptComponent } from './goodsreceipt/goodsreceipt.component';
import { VendorinvoiceComponent } from './vendorinvoice/vendorinvoice.component';
import { VendorpaymentComponent } from './vendorpayment/vendorpayment.component';
import { VendorcreditComponent } from './vendorcredit/vendorcredit.component';
import { VendorpocreateComponent } from './vendorpocreate/vendorpocreate.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmployeeleavehistoryComponent } from './employeeleavehistory/employeeleavehistory.component';
import { EmployeeleaveavailComponent } from './employeeleaveavail/employeeleaveavail.component';
import { EmployeeleaverequestComponent } from './employeeleaverequest/employeeleaverequest.component';
import { EmployeepayslipComponent } from './employeepayslip/employeepayslip.component';
import { CustcreateComponent } from './custcreate/custcreate.component';
import { EmployeefullsettlementComponent } from './employeefullsettlement/employeefullsettlement.component';
import { InquiryitemdataComponent } from './inquiryitemdata/inquiryitemdata.component';
import { DeliveryitemComponent } from './deliveryitem/deliveryitem.component';
import { RfqitemComponent } from './rfqitem/rfqitem.component';
import { PaypdfviewPipe } from './paypdfview.pipe';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    DashboardComponent,
    InquiryDataComponent,
    ProfileviewComponent,
    SaleOrderComponent,
    DeliveryComponent,
    InvoiceComponent,
    PaymentsComponent,
    CreditComponent,
    OverallSalesComponent,
    LandingpageComponent,
    ContactusComponent,
    GetintouchComponent,
    LstmComponent,
    VendorloginComponent,
    PurchaseorderComponent,
    RFQComponent,
    GoodsreceiptComponent,
    VendorinvoiceComponent,
    VendorpaymentComponent,
    VendorcreditComponent,
    VendorpocreateComponent,
    EmployeeloginComponent,
    EmployeeprofileComponent,
    EmployeeleavehistoryComponent,
    EmployeeleaveavailComponent,
    EmployeeleaverequestComponent,
    EmployeepayslipComponent,
    CustcreateComponent,
    EmployeefullsettlementComponent,
    InquiryitemdataComponent,
    DeliveryitemComponent,
    RfqitemComponent,
    PaypdfviewPipe,
    EmppaypdfviewComponent,
    VendorinvoicepdfComponent,
    CustforgetpasswordComponent,
    CustemailComponent,
    EntercustemailotpComponent,
    VendorentermailComponent,
    VendorenterotpComponent,
    VendorchangepasswordComponent,
    EnterempmailComponent,
    EnterempotpComponent,
    EmpchangepasswordComponent,
    GoodsreceiptheadComponent,
    PurchaseorderheadComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NzButtonModule,
    NzTableModule,
    MatTableModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,


    
  ],
  providers: [AuthService,AuthGuard,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
