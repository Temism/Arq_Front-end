import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ListarEspecialidadesService } from './Services/listar-especialidades.service';
import { routes } from './app.routes';
import { UsuarioService } from './Services/usuario.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: UsuarioService },
    { provide: ListarEspecialidadesService },
    provideHttpClient(),
  ],
};
