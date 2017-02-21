import { TestBed, inject } from '@angular/core/testing';
import { GadaiService } from './gadai.service';

describe('GadaiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GadaiService]
    });
  });

  it('should ...', inject([GadaiService], (service: GadaiService) => {
    expect(service).toBeTruthy();
  }));
});
