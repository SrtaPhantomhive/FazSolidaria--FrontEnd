import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StatusPedido } from '../model/StatusPedido';

@Injectable({
  providedIn: 'root',
})
export class StatusPedidoService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  confirmar(id: number) {
    return this.http.put(
      `http://localhost:8080/pedidos/${id}/confirmacao`,
      this.token
    );
  }

  cancelar(id: number) {
    return this.http.put(
      `http://localhost:8080/pedidos/${id}/cancelamento`,
      this.token
    );
  }

  entrega(id: number) {
    return this.http.put(
      `http://localhost:8080/pedidos/${id}/entrega`,
      this.token
    );
  }
}
