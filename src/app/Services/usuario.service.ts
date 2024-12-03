import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}

  getalluser(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getuserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createUser(usuario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);
  }

  updateUser(id: number, usuario: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, usuario);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
