import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstmComponent } from './lstm.component';

describe('LstmComponent', () => {
  let component: LstmComponent;
  let fixture: ComponentFixture<LstmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
