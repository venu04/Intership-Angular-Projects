import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorinvoicepdfComponent } from './vendorinvoicepdf.component';

describe('VendorinvoicepdfComponent', () => {
  let component: VendorinvoicepdfComponent;
  let fixture: ComponentFixture<VendorinvoicepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorinvoicepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorinvoicepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
