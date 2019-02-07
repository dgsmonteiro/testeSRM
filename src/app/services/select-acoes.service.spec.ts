import { TestBed } from '@angular/core/testing';

import { SelectAcoesService } from './select-acoes.service';

describe('SelectAcoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectAcoesService = TestBed.get(SelectAcoesService);
    expect(service).toBeTruthy();
  });
});
