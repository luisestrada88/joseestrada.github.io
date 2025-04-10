import { TestBed } from '@angular/core/testing';

import { EducationService } from './education.service';

describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});

