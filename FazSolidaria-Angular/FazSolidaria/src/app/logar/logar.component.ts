import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css'],
})
export class LogarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  logar() {
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        environment.token = this.usuarioLogin.token
        environment.nome = this.usuarioLogin.nome
        environment.id = this.usuarioLogin.id
        environment.senha = this.usuarioLogin.senha

        console.log(environment.token + "token")
        console.log(environment.senha + "senha")
        
        this.router.navigate(['/home'])
      },
      (erro) => {
        if ((erro.status = 500)) {
          alert('Usuario ou Senha estão incorretos')
          console.log(environment.token + "token")
          console.log(environment.usuario + "usuario")
          console.log(environment.senha + "senha")
        }
      }
    );
  }

  // para o botao sair evento de click
  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
  }
}
