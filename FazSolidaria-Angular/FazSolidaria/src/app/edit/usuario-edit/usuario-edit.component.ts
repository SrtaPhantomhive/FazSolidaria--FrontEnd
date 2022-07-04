import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css'],
})
export class UsuarioEditComponent implements OnInit {
  usuario: Usuario = new Usuario();
  idUsuario: number;
  tipoUsuario: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
     //pagina inicia x=0 e y=0
     window.scroll(0,0)

    // toda vez que a atualiza a pagina ele retorna para a pag de login
    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    //pega o id e coloca na rota ativa
    this.idUsuario = this.route.snapshot.params['id'];

    // na rota ativa apresenta o id escolhido para editar
    this.buscarIdUsuario(this.idUsuario);

    console.log('Token edit-usuario:' + environment.token);
  }

  buscarIdUsuario(id: number) {
    this.authService.buscarIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value;
  }

  atualizarCadastro() {
    this.usuario.tipo = this.tipoUsuario;

    this.authService
      .atualizarCadastro(this.usuario)
      .subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/login']);
        alert('Usuário atualizado, faça o login novamente!');
        environment.token = '';
        environment.nome = '';
        environment.id = 0;
      });
  }
}
