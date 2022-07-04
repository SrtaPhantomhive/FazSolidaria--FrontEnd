import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  mostrarProdutosCadastrados(): Observable<Produto[]>{
  return this.http.get<Produto[]>('http://localhost:8080/produtos') 
  }


  buscarPeloIdProduto(id:number): Observable<Produto>{
  return this.http.get<Produto>(`http://localhost:8080/produtos/buscar-id-produto/${id}`)
  }

  buscarPeloNomeProduto(nome: String): Observable<Produto[]> {
    return this.http.get<Produto[]>(
      `http://localhost:8080/produtos/nome/${nome}`
    );
  }

  cadastrarProduto(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produtos/cadastrar-produto', produto)
  }

  atualizarCadastroProduto(produto:Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/produtos/atualizar-produto', produto, this.token)
  }

  deletarProduto(id:number){
    return this.http.delete(`http://localhost:8080/categorias/deletar-id-categoria/${id}`, this.token)
  }
}
