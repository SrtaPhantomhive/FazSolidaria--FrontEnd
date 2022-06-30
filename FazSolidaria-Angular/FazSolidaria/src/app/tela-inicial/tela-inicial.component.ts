import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarrinhoServeService } from '../service/carrinho-serve.service';



@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  listaProdutos: Produto[];

  idProduto: number;
  produtoEsp: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoServeService
  ) { }

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    // toda vez que a atualiza a pagina ele retorna para a pag de login
    this.mostrarProdutosCadastrados();
    // this.mostraProdEspe()
  }

  listaFrutas: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<img src="../../assets/img/left-arrow.png">',
      '<img src="../../assets/img/arrow-right.png">    ',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  listaVerduras: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<img src="../../assets/img/left-arrow.png">',
      '<img src="../../assets/img/arrow-right.png">    ',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  listaLegumes: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<img src="../../assets/img/left-arrow.png">',
      '<img src="../../assets/img/arrow-right.png">    ',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };

  mostrarProduto(produto: Produto) {
    this.produtoEsp = produto
    console.log(this.produtoEsp)
  }

  mostrarProdutosCadastrados() {
    this.produtoService
      .mostrarProdutosCadastrados()
      .subscribe((resp: Produto[]) => {
        this.listaProdutos = resp;
      });
  }
  adicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);

  }
  buscarIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produtoEsp = resp;
    });
  }

}

