import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriaService } from '../service/categoria.service';
import { ItensCarrinho } from '../model/ItensCarrinho';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  listaProdutos: Produto[];
  carrinho = environment.carrinho;
  idProduto: number;
  produtoEsp: Produto = new Produto();

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private carrinhoService: CarrinhoServeService
  ) {}

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
    const itensCarrinho = new ItensCarrinho(produto);
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
