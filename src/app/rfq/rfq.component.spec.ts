import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFQComponent } from './rfq.component';

describe('RFQComponent', () => {
  let component: RFQComponent;
  let fixture: ComponentFixture<RFQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
