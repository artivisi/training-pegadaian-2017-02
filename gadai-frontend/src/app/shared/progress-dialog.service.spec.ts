import { TestBed, inject } from '@angular/core/testing';
import { ProgressDialogService } from './progress-dialog.service';

describe('ProgressDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressDialogService]
    });
  });

  it('should ...', inject([ProgressDialogService], (service: ProgressDialogService) => {
    expect(service).toBeTruthy();
  }));
});
