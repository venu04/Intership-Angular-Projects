import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryitemdataComponent } from './inquiryitemdata.component';

describe('InquiryitemdataComponent', () => {
  let component: InquiryitemdataComponent;
  let fixture: ComponentFixture<InquiryitemdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryitemdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryitemdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
