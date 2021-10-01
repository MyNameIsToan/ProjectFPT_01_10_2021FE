/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FacultyServiceService } from './FacultyService.service';

describe('Service: FacultyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyServiceService]
    });
  });

  it('should ...', inject([FacultyServiceService], (service: FacultyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
