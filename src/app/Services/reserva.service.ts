import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../Models/reserva';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private baseUrl = 'http://localhost:8080/reservas';
  private alterativa = 'http://localhost:8080/usuarios';
  private alterativa2 = 'http://localhost:8080/usuarios/esp';

  constructor(private httpClient: HttpClient) {}

  getReservas(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  createReserva(reserva: Object): Observable<Reserva> {
    return this.httpClient.post<Reserva>(`${this.baseUrl}`, reserva);
  }

  actualizarEstadoReserva(id: number, estado: string): Observable<Reserva> {
    const params = new HttpParams().set('estado', estado);
    return this.httpClient.patch<Reserva>(
      `${this.baseUrl}/${id}/estado`,
      null,
      { params }
    );
  }

  deleteReserva(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text',
    });
  }

  getReserva(id: number): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.alterativa}/${id}/reservas`);
  }

  getReservaEspecialista(id: number): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(`${this.alterativa2}/${id}/reservas`);
  }
}
