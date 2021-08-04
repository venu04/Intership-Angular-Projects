import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterempotpComponent } from './enterempotp.component';

describe('EnterempotpComponent', () => {
  let component: EnterempotpComponent;
  let fixture: ComponentFixture<EnterempotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterempotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterempotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
