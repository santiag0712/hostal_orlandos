import { TestBed } from '@angular/core/testing';

import { DataClienteService } from './data-cliente.service';

describe('DataClienteService', () => {
  let service: DataClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
