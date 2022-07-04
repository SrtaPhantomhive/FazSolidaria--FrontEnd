import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css'],
})
export class ProdutoEditComponent implements OnInit {
  produto: Produto = new Produto();
  idCategoria: number
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

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
      this.router.navigate(['/login']);
    }

    let id = this.route.snapshot.params['id'];

    this.buscarPeloIdProduto(id);
    this.mostrarCategoriasCadastradas();
  }

  buscarPeloIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
      console.log(this.produto)
    });
  }

  atualizarProduto() {
    this.produtoService
      .atualizarCadastroProduto(this.produto)
      .subscribe((resp: Produto) => {
        this.produto = resp;
        this.router.navigate(['/cadastrar-produto']);
      });
  }

  
  buscarPeloIdCategoria() {
    this.categoriaService
      .buscarIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria  = resp;
      });
  }

  mostrarCategoriasCadastradas() {
    this.categoriaService
      .mostrarCategoriasCadastradas()
      .subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp;
      });
  }
}
