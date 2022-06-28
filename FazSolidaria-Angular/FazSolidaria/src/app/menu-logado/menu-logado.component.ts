import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css'],
})
export class MenuLogadoComponent implements OnInit {
  precoTotal: number = 0.0;
  quantidadeTotal: number = 0;

  nome = environment.nome;
  id = environment.id;

  constructor(
    private router: Router,
    private carrinhoService: CarrinhoServeService
  ) {}

  ngOnInit() {
this.atualizacaoCarrinho()
  }

  sair() {
    this.router.navigate(['/catalogo']);
    environment.token = '';
    environment.nome = '';
    environment.id = 0;
  }

  atualizacaoCarrinho() {
    this.carrinhoService.totalPrice.subscribe((data) => {
      this.precoTotal = data;
    });

    this.carrinhoService.totalQuantity.subscribe((data) => {
      this.quantidadeTotal = data;
    });
  }
}
