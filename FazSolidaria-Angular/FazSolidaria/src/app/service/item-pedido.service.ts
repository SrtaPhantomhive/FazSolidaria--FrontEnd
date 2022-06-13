import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ItemPedido } from '../model/ItemPedido';

@Injectable({
  providedIn: 'root',
})
export class ItemPedidoService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  mostrarItensPedidoCadastrados(): Observable<ItemPedido[]>{
    return this.http.get<ItemPedido[]>('http://localhost:8080/itens-pedido', this.token)
  }

  buscarIdItemPedido(id:number): Observable<ItemPedido>{
    return this.http.get<ItemPedido>(`http://localhost:8080/itens-pedido/buscar-id-item-pedido/${id}`, this.token)
  }

  cadastrarItemPedido(itemPedido: ItemPedido): Observable<ItemPedido> {
    return this.http.post<ItemPedido>(
      'http://localhost:8080/itens-pedido/cadastrar-item-pedido',
      itemPedido,
      this.token
    );
  }

  atualizarCadastroItemPedido(itemPedido: ItemPedido): Observable<ItemPedido> {
    return this.http.put<ItemPedido>(
      'http://localhost:8080/itens-pedido/atualizar-item-pedido',
      itemPedido,
      this.token
    );
  }

  deletarItemPedido(id: number) {
    return this.http.delete(
      `http://localhost:8080/itens-pedido/deletar-id-item-pedido/${id}`,
      this.token
    );
  }
}
