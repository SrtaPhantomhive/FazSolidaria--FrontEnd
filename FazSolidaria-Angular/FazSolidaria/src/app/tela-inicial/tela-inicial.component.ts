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
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    this.mostrarProdutosCadastrados();
  
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

  mostrarProdutosCadastrados() {
    this.produtoService
      .mostrarProdutosCadastrados()
      .subscribe((resp: Produto[]) => {
        this.listaProdutos = resp;
      });
  }

  // itensCarrinho: any = [];
  // adicionarCarrinho(produto: any) {
  //   console.log(produto);
  //   let dadosCarrinhoNulo = localStorage.getItem('ProdCarrinho');
  //   if (dadosCarrinhoNulo == null) {
  //     let pegarDadosArmazena: any = [];
  //     pegarDadosArmazena.push(produto);
  //     localStorage.setItem('ProdCarrinho', JSON.stringify(pegarDadosArmazena));
  //   } else {
  //     var id = produto.id;
  //     let index: number = -1;
  //     this.itensCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
  //     for (let i = 0; i < this.itensCarrinho.length; i++) {
  //       if (parseInt(id) === parseInt(this.itensCarrinho[i].id)) {
  //         this.itensCarrinho[i].estoque = produto.estoque;
  //         index = i;
  //         break;
  //       }
  //     }
  //     if (index == -1) {
  //       this.itensCarrinho.push(produto);
  //       localStorage.setItem('ProdCarrinho', JSON.stringify(this.itensCarrinho));
  //       alert('Adicionado ao carrinho');
  //     } else {
  //       localStorage.setItem('ProdCarrinho', JSON.stringify(this.itensCarrinho));
  //       alert('Adicionado ao carrinho');
  //     }
  //   }

  // }
  adicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
    
  }

  buscarIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produtoEsp = resp;
    });
  }

  mostrarProduto(produto:Produto) {
    this.produtoEsp = produto
    console.log(this.produtoEsp)
  }

}
