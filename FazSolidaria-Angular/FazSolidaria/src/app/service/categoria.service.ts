import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  mostrarCategoriasCadastradas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categorias')
  }

  buscarIdCategoria(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categorias/buscar-id-categoria/${id}`)
  }

  cadastrarCategoria(categoria:Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('http://localhost:8080/categorias/cadastrar-categoria', categoria, this.token)
  }

  atualizarCadastroCategoria(categoria:Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('http://localhost:8080/categorias/atualizar-categoria',categoria, this.token)
  }

  deletarCategoria(id:number){
    return this.http.delete(`http://localhost:8080/categorias/deletar-id-categoria/${id}`, this.token)
  }
 
}
