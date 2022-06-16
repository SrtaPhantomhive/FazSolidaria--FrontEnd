import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  tipoUsuario: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
  }

  //evento para escolha
  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario;

    this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.router.navigate(['/login']);//quando cadastrar automaticamente vai para essa pagina(rota)
      alert('Usuario cadastrado com sucesso');
    });
  }



}


//subscribe -> transforma em objeto json para o servidor entender
