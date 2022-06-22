import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import  {  OwlOptions  }  from  'ngx-owl-carousel-o' ;
import { CategoriaService } from '../service/categoria.service';



@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  listaProdutos: Produto[];

  constructor(private router: Router, private produtoService: ProdutoService, private categoriaService: CategoriaService) {}

  ngOnInit() {
    // toda vez que a atualiza a pagina ele retorna para a pag de login
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente!');
      this.router.navigate(['/login']);
    }
    this.mostrarProdutosCadastrados();
  }

  listaFrutas: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../assets/img/left-arrow.png">', '<img src="../../assets/img/arrow-right.png">    '],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }


  listaVerduras: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../assets/img/left-arrow.png">', '<img src="../../assets/img/arrow-right.png">    '],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  listaLegumes: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<img src="../../assets/img/left-arrow.png">', '<img src="../../assets/img/arrow-right.png">    '],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  
  mostrarProdutosCadastrados() {  
      this.produtoService.mostrarProdutosCadastrados().subscribe((resp: Produto[]) => {
          this.listaProdutos = resp
    });
  
  }
}
