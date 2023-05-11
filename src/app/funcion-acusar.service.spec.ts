import { TestBed } from '@angular/core/testing';

import { FuncionAcusarService } from './funcion-acusar.service';

describe('FuncionAcusarService', () => {
  let service: FuncionAcusarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionAcusarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
