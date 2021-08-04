import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpchangepasswordComponent } from './empchangepassword.component';

describe('EmpchangepasswordComponent', () => {
  let component: EmpchangepasswordComponent;
  let fixture: ComponentFixture<EmpchangepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpchangepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
