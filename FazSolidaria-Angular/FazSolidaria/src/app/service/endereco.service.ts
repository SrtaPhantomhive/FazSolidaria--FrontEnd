import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereco';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  cadastrarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(
      'http://localhost:8080/enderecos/cadastrar-endereco',
      endereco,
      this.token
    );
  }

  atualizarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(
      'http://localhost:8080/enderecos/cadastrar-endereco',
      endereco,
      this.token
    );
  }
}
