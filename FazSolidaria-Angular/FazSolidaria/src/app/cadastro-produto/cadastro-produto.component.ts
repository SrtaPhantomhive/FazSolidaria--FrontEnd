import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  listaCategorias: Categoria[];
  listaProdutos: Produto[];
  idCategoria: number;
  categoria: Categoria = new Categoria();
  produto: Produto = new Produto();

  constructor(private categoriaService: CategoriaService, private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(){
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    if (environment.token == '') {
      Swal.fire(
        {
          title: 'Pedido Finalizado',
          text: `Seu pedido foi realizado com sucesso! Enviaremos um email quando estiver tudo certo para a entrega!`,
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#75DC36',
          showCancelButton: false,
        });
      this.router.navigate(['/login']);
    }

    this.mostrarCategoriasCadastradas();
    this.mostrarProdutosCadastrados()
  }


  mostrarCategoriasCadastradas() {
    this.categoriaService
      .mostrarCategoriasCadastradas()
      .subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp;
      });
  }

  buscarPeloIdCategoria() {
    this.categoriaService
      .buscarIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  mostrarProdutosCadastrados() {
    this.produtoService.mostrarProdutosCadastrados().subscribe(
      (resp: Produto[]) => {
        this.listaProdutos = resp;
      }
    );
  }

  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.cadastrarProduto(this.produto).subscribe((resp:Produto)=>{
      this.produto=resp
      alert('Cadastro do Produto Realizado')
      this.produto = new Produto()
      this.mostrarProdutosCadastrados()
    })

  }
}
