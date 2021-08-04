import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeepayslipComponent } from './employeepayslip.component';

describe('EmployeepayslipComponent', () => {
  let component: EmployeepayslipComponent;
  let fixture: ComponentFixture<EmployeepayslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeepayslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeepayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
