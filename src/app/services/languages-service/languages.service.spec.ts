import { TestBed } from '@angular/core/testing';

import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
