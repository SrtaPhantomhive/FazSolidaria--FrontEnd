import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  listaCategorias: Categoria[];

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    //pagina inicia x=0 e y=0
    window.scroll(0,0)

    // toda vez que a atualiza a pagina ele retorna para a pag de login
    if(environment.token == ''){
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

    // Mostra todas as categorias cadastradaas quando entra na pagina categoria
    this.buscarTodasCategoriasCadastradas();
  }

  buscarTodasCategoriasCadastradas() {
    this.categoriaService
      .mostrarCategoriasCadastradas()
      .subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp;
      });
  }

  cadastrarCategoria() {
    this.categoriaService
      .cadastrarCategoria(this.categoria)
      .subscribe((resp: Categoria) => {
        console.log(environment.token)
        this.categoria = resp;
        alert('Categoria cadastrado com sucesso!');
        this.buscarTodasCategoriasCadastradas();
        this.categoria = new Categoria();
      });
  }
}
