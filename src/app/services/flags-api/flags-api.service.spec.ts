import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FlagsApiService } from './flags-api.service';

describe('FlagsApiService', () => {
  let service: FlagsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FlagsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
