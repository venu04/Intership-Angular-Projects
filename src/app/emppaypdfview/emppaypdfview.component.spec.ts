import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppaypdfviewComponent } from './emppaypdfview.component';

describe('EmppaypdfviewComponent', () => {
  let component: EmppaypdfviewComponent;
  let fixture: ComponentFixture<EmppaypdfviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmppaypdfviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmppaypdfviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
