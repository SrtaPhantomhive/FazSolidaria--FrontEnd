import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  mostrarPedidosCadastrados(): Observable<Pedido[]>{
return this.http.get<Pedido[]>('http://localhost:8080/pedidos', this.token)
  }

  buscarIdPedido(id:number): Observable<Pedido>{
    return this.http.get<Pedido>(`http://localhost:8080/pedidos/buscar-id-pedido/${id}`, this.token)
  }

  criarPedido(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>('http://localhost:8080/pedidos/cadastrar-pedido', this.token)
  }

}
