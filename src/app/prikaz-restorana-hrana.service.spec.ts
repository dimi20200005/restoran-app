import { TestBed } from '@angular/core/testing';

import { PrikazRestoranaHranaService } from './prikaz-restorana-hrana.service';

describe('PrikazRestoranaHranaService', () => {
  let service: PrikazRestoranaHranaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrikazRestoranaHranaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
