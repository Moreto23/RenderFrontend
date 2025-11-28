import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toHttpParams } from './http.util';
import { environment } from '../../environments/environment'; // 👈 ajusta la ruta si es necesario

@Injectable({ providedIn: 'root' })
export class PagosService {

  // Antes:
  // private base = `/api/pagos`;
  // private paypalBase = `/api/paypal`;

  private base = `${environment.apiBaseUrl}/api/pagos`;
  private paypalBase = `${environment.apiBaseUrl}/api/paypal`;

  constructor(private http: HttpClient) {}

  iniciar(usuarioId: number, metodoPago: 'YAPE' | 'PAYPAL') {
    return this.http.post<any>(
      `${this.base}/iniciar`,
      null,
      { params: toHttpParams({ usuarioId, metodoPago }) }
    );
  }

  confirmar(pedidoId: number, referenciaPago?: string) {
    return this.http.post<any>(
      `${this.base}/${pedidoId}/confirmar`,
      null,
      { params: toHttpParams({ referenciaPago }) }
    );
  }

  crearOrdenPaypal(usuarioId: number) {
    return this.http.post<any>(
      `${this.paypalBase}/create-order`,
      null,
      { params: toHttpParams({ usuarioId }) }
    );
  }

  capturarPaypal(orderId: string, pedidoId: number) {
    return this.http.post<any>(
      `${this.paypalBase}/capture`,
      null,
      { params: toHttpParams({ orderId, pedidoId }) }
    );
  }

  crearPreferenciaMercadoPago(usuarioId?: number) {
    const options = usuarioId != null
      ? { params: toHttpParams({ usuarioId }) }
      : {};
    return this.http.post<any>(
      `${this.base}/mercadopago/preferencia`,
      null,
      options as any
    );
  }

  crearPreferenciaDirecta(titulo: string, monto: number, usuarioId?: number) {
    const params: any = { titulo, monto };
    if (usuarioId != null) params.usuarioId = usuarioId;

    return this.http.post<any>(
      `${this.base}/mercadopago/preferencia-directa`,
      null,
      { params: toHttpParams(params) }
    );
  }
}
