import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should authenticate valid user', () => {
    expect(service.authenticate('usuarioPOC', '123456@')).toBeTrue();
  });

  it('should reject invalid user', () => {
    expect(service.authenticate('wrong', 'credentials')).toBeFalse();
  });
});
