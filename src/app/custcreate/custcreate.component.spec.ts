import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustcreateComponent } from './custcreate.component';

describe('CustcreateComponent', () => {
  let component: CustcreateComponent;
  let fixture: ComponentFixture<CustcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
