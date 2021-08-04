import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpocreateComponent } from './vendorpocreate.component';

describe('VendorpocreateComponent', () => {
  let component: VendorpocreateComponent;
  let fixture: ComponentFixture<VendorpocreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorpocreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
