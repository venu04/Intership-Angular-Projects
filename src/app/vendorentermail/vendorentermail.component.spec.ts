import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorentermailComponent } from './vendorentermail.component';

describe('VendorentermailComponent', () => {
  let component: VendorentermailComponent;
  let fixture: ComponentFixture<VendorentermailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorentermailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorentermailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
