import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../Models/reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private baseUrl = 'http://localhost:8080/reservas';
  private alterativa = 'http://localhost:8080/usuarios';

  constructor(private httpClient: HttpClient) {}

  getReservas(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createReserva(reserva: Object): Observable<Reserva> {
    return this.httpClient.post<Reserva>(`${this.baseUrl}`, reserva);
  }

  updateReserva(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/edit/${id}`, value);
  }

  deleteReserva(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text',
    });
  }

  getReserva(id: number): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.alterativa}/${id}/reservas`);
  }
}
