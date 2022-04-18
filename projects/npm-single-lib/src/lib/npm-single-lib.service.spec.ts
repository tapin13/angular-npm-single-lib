import { TestBed } from '@angular/core/testing';

import { NpmSingleLibService } from './npm-single-lib.service';

describe('NpmSingleLibService', () => {
  let service: NpmSingleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmSingleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
