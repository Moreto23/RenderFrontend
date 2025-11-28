import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toHttpParams } from './http.util';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PlanesService {

  private base = `${environment.apiBaseUrl}/api/planes`;

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.base}`);
  }

  obtener(id: number) {
    return this.http.get<any>(`${this.base}/${id}`);
  }

  suscribirse(id: number, usuarioId: number, monto?: number) {
    return this.http.post<any>(
      `${this.base}/${id}/suscribirse`,
      null,
      { params: toHttpParams({ usuarioId, monto }) }
    );
  }
}
