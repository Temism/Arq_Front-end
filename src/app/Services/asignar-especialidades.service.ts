import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsignarEspecialidadesService {
  private baseUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}

  asignarEspecialidades(
    idUsuario: number,
    especialidades: number[]
  ): Observable<any> {
    const url = `${this.baseUrl}/${idUsuario}/asignar-especialidades`;
    return this.http.post(url, especialidades);
  }
}
