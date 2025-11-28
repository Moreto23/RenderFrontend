import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // 👈 ruta según tu proyecto

@Injectable({ providedIn: 'root' })
export class DashboardService {

  // Antes:
  // private base = '/api/dashboard';
  private base = `${environment.apiBaseUrl}/api/dashboard`;

  constructor(private http: HttpClient) {}

  resumen(usuarioId: number) {
    return this.http.get<any>(`${this.base}/${usuarioId}`);
  }
}
