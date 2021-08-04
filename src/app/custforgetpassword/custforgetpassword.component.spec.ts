import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustforgetpasswordComponent } from './custforgetpassword.component';

describe('CustforgetpasswordComponent', () => {
  let component: CustforgetpasswordComponent;
  let fixture: ComponentFixture<CustforgetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustforgetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustforgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
