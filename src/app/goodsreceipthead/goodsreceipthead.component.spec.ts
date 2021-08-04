import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsreceiptheadComponent } from './goodsreceipthead.component';

describe('GoodsreceiptheadComponent', () => {
  let component: GoodsreceiptheadComponent;
  let fixture: ComponentFixture<GoodsreceiptheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsreceiptheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsreceiptheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
