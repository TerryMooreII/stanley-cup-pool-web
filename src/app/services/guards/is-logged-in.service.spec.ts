/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsLoggedInService } from './is-logged-in.service';

describe('IsLoggedInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLoggedInService]
    });
  });

  it('should ...', inject([IsLoggedInService], (service: IsLoggedInService) => {
    expect(service).toBeTruthy();
  }));
});
