import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private baseUrl = 'http://localhost:8080/servicios';

  constructor(private http: HttpClient) {}

  getServicios(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  createServicio(servicio: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/crear`, servicio);
  }
  updateServicio(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, value);
  }
  deleteServicio(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`, {
      responseType: 'text',
    });
  }
}
