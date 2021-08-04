import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorenterotpComponent } from './vendorenterotp.component';

describe('VendorenterotpComponent', () => {
  let component: VendorenterotpComponent;
  let fixture: ComponentFixture<VendorenterotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorenterotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorenterotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
