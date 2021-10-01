/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubjectServiceService } from './SubjectService.service';

describe('Service: SubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectServiceService]
    });
  });

  it('should ...', inject([SubjectServiceService], (service: SubjectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
