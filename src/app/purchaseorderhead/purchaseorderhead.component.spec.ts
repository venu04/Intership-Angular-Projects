import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderheadComponent } from './purchaseorderhead.component';

describe('PurchaseorderheadComponent', () => {
  let component: PurchaseorderheadComponent;
  let fixture: ComponentFixture<PurchaseorderheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseorderheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseorderheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
