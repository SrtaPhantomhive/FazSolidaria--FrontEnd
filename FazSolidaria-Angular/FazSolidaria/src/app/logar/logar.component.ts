import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css'],
})
export class LogarComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  logar() {
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        environment.token = this.usuarioLogin.token
        environment.nome = this.usuarioLogin.nome.split(' ').slice(0,1).join(' ')
        // 
        environment.id = this.usuarioLogin.id
        environment.senha = this.usuarioLogin.senha
        environment.tipo = this.usuarioLogin.tipo

        console.log(environment.token + "token")
        console.log(environment.senha + "senha")
        console.log(environment.tipo + "tipo")
        
        this.router.navigate(['/home'])
      },
      (erro) => {
        if ((erro.status = 500)) {
          console.log(environment.token + "token")
          console.log(environment.usuario + "usuario")
          console.log(environment.senha + "senha")
          Swal.fire(
            {
              title: 'Dados Inválidos',
              text: 'Usuario ou Senha incorretos',
              icon: 'error',
              showConfirmButton: true,
              confirmButtonText: 'Ok',
              confirmButtonColor: '#75DC36',
              showCancelButton: false,
            });
            this.router.navigate(['/login'])
        }
      }
    );
  }

  // para o botao sair evento de click
  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
  }

  doacao() {
    this.router.navigate(['/']);//quando cadastrar automaticamente vai para essa pagina(rota)
    Swal.fire(
      {
        title: 'Compra = Doação!',
        text: 'A cada compra, uma parte do valor pago é revertido em cestas básicas para famílias carentes!',
        icon: 'info',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#75DC36',
        showCancelButton: false,
      });
  }
}
