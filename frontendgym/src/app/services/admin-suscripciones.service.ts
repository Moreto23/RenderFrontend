import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // 👈 AJUSTA RUTA SEGÚN TU PROYECTO

@Injectable({ providedIn: 'root' })
export class AdminSuscripcionesService {

  // Antes:
  // private basePlanes = '/api/planes';
  // private baseMembresias = '/api/membresias';

  private basePlanes = `${environment.apiBaseUrl}/api/planes`;
  private baseMembresias = `${environment.apiBaseUrl}/api/membresias`;

  constructor(private http: HttpClient) {}

  // --------------------------
  // PLANES
  // --------------------------
  listarPlanes() {
    return this.http.get<any[]>(this.basePlanes);
  }

  obtenerPlan(id: number) {
    return this.http.get<any>(`${this.basePlanes}/${id}`);
  }

  crearPlan(body: any) {
    return this.http.post<any>(this.basePlanes, body);
  }

  actualizarPlan(id: number, body: any) {
    return this.http.put<any>(`${this.basePlanes}/${id}`, body);
  }

  eliminarPlan(id: number) {
    return this.http.delete<void>(`${this.basePlanes}/${id}`);
  }

  // --------------------------
  // MEMBRESÍAS
  // --------------------------
  listarMembresias() {
    return this.http.get<any[]>(this.baseMembresias);
  }

  obtenerMembresia(id: number) {
    return this.http.get<any>(`${this.baseMembresias}/${id}`);
  }

  crearMembresia(body: any) {
    return this.http.post<any>(this.baseMembresias, body);
  }

  actualizarMembresia(id: number, body: any) {
    return this.http.put<any>(`${this.baseMembresias}/${id}`, body);
  }

  eliminarMembresia(id: number) {
    return this.http.delete<void>(`${this.baseMembresias}/${id}`);
  }

  // --------------------------
  // SUSCRIPTORES
  // --------------------------
  suscriptoresMembresia(id: number) {
    return this.http.get<any[]>(`${this.baseMembresias}/${id}/suscriptores`);
  }

  suscriptoresPlan(id: number) {
    return this.http.get<any[]>(`${this.basePlanes}/${id}/suscriptores`);
  }
}
