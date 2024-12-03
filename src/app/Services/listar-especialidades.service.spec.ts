import { TestBed } from '@angular/core/testing';

import { ListarEspecialidadesService } from './listar-especialidades.service';

describe('ListarEspecialidadesService', () => {
  let service: ListarEspecialidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarEspecialidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
