import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private baseUrl = 'http://localhost:8080/servicios';
  private baseUrl2 = 'http://localhost:8080/servicios/usuario';

  constructor(private http: HttpClient) {}

  getServicios(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getServicioPorId(id: number): Observable<any> {
    console.log(this.baseUrl2 + '/' + id);
    return this.http.get(`${this.baseUrl2}/${id}`);
  }

  createServicio(servicio: any, idUsuario: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuario/${idUsuario}`, servicio);
  }
  updateServicio(id: number, value: object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteServicio(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text',
    });
  }
  getallServicios(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
