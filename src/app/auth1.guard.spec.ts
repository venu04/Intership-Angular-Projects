import { TestBed } from '@angular/core/testing';

import { AuthGuard1 } from './auth.guard';

describe('AuthGuard1', () => {
  let guard: AuthGuard1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard1);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
