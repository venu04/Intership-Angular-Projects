import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorchangepasswordComponent } from './vendorchangepassword.component';

describe('VendorchangepasswordComponent', () => {
  let component: VendorchangepasswordComponent;
  let fixture: ComponentFixture<VendorchangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorchangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
