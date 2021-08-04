import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleaverequestComponent } from './employeeleaverequest.component';

describe('EmployeeleaverequestComponent', () => {
  let component: EmployeeleaverequestComponent;
  let fixture: ComponentFixture<EmployeeleaverequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeleaverequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeleaverequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
