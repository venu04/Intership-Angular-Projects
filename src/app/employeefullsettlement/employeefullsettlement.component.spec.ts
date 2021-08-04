import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefullsettlementComponent } from './employeefullsettlement.component';

describe('EmployeefullsettlementComponent', () => {
  let component: EmployeefullsettlementComponent;
  let fixture: ComponentFixture<EmployeefullsettlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeefullsettlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefullsettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
