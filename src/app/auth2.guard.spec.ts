import { TestBed } from '@angular/core/testing';

import { AuthGuard2 } from './auth.guard';

describe('AuthGuard2', () => {
  let guard: AuthGuard2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard2);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
