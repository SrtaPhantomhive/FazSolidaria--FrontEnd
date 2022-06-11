import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token={
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'http://localhost:8080/usuarios/login-usuario', usuarioLogin);
  }

  cadastrar(usuario: Usuario) {
    return this.http.post<Usuario>(
      'http://localhost:8080/usuarios/cadastrar-usuario',
      usuario
    );
  }

  atualizarCadastro(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>("http://localhost:8080/usuarios/atualizar-usuario", usuario, this.token)
  }

  // Determinando para controle de componente
  logado() {
    let ok: boolean = false

    if (environment.token != "") {
      ok = true
    }
    return ok
  }

  deslogado(){
    let ok: boolean = false
    if(environment.token == ""){
      ok = true
    }

    return ok
  }

}
