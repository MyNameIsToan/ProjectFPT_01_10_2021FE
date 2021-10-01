/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeacherServiceService } from './TeacherService.service';

describe('Service: TeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherServiceService]
    });
  });

  it('should ...', inject([TeacherServiceService], (service: TeacherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
