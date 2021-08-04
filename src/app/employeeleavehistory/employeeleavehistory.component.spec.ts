import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleavehistoryComponent } from './employeeleavehistory.component';

describe('EmployeeleavehistoryComponent', () => {
  let component: EmployeeleavehistoryComponent;
  let fixture: ComponentFixture<EmployeeleavehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeleavehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeleavehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
