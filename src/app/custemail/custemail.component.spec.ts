import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustemailComponent } from './custemail.component';

describe('CustemailComponent', () => {
  let component: CustemailComponent;
  let fixture: ComponentFixture<CustemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
