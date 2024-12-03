import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListarEspecialidadesService {
  private baseUrl = 'http://localhost:8080/especialidades';

  constructor(private http: HttpClient) {}

  getallespecialidades(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
