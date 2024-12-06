import { TestBed } from '@angular/core/testing';

import { AsignarEspecialidadesService } from './asignar-especialidades.service';

describe('AsignarEspecialidadesService', () => {
  let service: AsignarEspecialidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignarEspecialidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
