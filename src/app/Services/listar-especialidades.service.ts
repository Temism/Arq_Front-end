import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad } from '../Models/especialidad';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListarEspecialidadesService {
  private baseUrl = 'http://localhost:8080/especialidades';

  constructor(private http: HttpClient) {}

  getallespecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(`${this.baseUrl}`);
  }
}
