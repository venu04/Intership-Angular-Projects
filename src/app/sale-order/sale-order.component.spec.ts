import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOrderComponent } from './sale-order.component';

describe('SaleOrderComponent', () => {
  let component: SaleOrderComponent;
  let fixture: ComponentFixture<SaleOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});