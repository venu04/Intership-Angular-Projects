import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleaveavailComponent } from './employeeleaveavail.component';

describe('EmployeeleaveavailComponent', () => {
  let component: EmployeeleaveavailComponent;
  let fixture: ComponentFixture<EmployeeleaveavailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeleaveavailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeleaveavailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
