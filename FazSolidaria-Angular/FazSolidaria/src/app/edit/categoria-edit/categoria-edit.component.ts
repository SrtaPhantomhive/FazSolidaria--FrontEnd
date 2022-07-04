import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    //pagina inicia x=0 e y=0
    window.scroll(0, 0)

    //  toda vez que a atualiza a pagina ele retorna para a pag de login
    if (environment.token == '') {
      Swal.fire(
        {
          title: 'Sua sessão expirou!',
          text: `Por favor, faça seu login novamente!`,
          icon: 'info',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#75DC36',
          showCancelButton: false,
        });
      this.router.navigate(['/login'])
    }

    //pega o id e coloca na rota ativa
    let id = this.route.snapshot.params['id'];

    // na rota ativa apresenta o id escolhido para editar
    this.buscarPeloIdCategoria(id)
  }

  buscarPeloIdCategoria(id: number) {
    this.categoriaService.buscarIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  atualizarCategoria() {
    this.categoriaService.atualizarCadastroCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp;
      this.router.navigate(['/categorias'])
    })
  }
}
