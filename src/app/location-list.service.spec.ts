import { TestBed, inject } from '@angular/core/testing';

import { LocationListService } from './location-list.service';

describe('LocationListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationListService]
    });
  });

  it('should ...', inject([LocationListService], (service: LocationListService) => {
    expect(service).toBeTruthy();
  }));
});
