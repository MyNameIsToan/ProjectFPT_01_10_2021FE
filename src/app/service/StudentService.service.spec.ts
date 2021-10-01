/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentServiceService } from './StudentService.service';

describe('Service: StudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentServiceService]
    });
  });

  it('should ...', inject([StudentServiceService], (service: StudentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
