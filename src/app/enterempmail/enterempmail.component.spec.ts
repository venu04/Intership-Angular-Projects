import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterempmailComponent } from './enterempmail.component';

describe('EnterempmailComponent', () => {
  let component: EnterempmailComponent;
  let fixture: ComponentFixture<EnterempmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterempmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterempmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
