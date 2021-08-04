import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntercustemailotpComponent } from './entercustemailotp.component';

describe('EntercustemailotpComponent', () => {
  let component: EntercustemailotpComponent;
  let fixture: ComponentFixture<EntercustemailotpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntercustemailotpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntercustemailotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
