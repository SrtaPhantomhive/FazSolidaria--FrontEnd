import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  precoTotal: number = 0.0;
  quantidadeTotal: number = 0;

  constructor(private carrinhoService: CarrinhoServeService) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.atualizacaoCarrinho();
  }
  // Evento para scrooll lenta
  toInicio() {
    document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
  }

  toCertificacao() {
    document
      .getElementById('certificados')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  toSobreNos() {
    document.getElementById('sobreNos')?.scrollIntoView({ behavior: 'smooth' });
  }

  toMissao() {
    document.getElementById('missao')?.scrollIntoView({ behavior: 'smooth' });
  }

  toEquipe() {
    document.getElementById('equipe')?.scrollIntoView({ behavior: 'smooth' });
  }

  atualizacaoCarrinho() {
    this.carrinhoService.precoTotal.subscribe((data) => {
      this.precoTotal = data;
    });

    this.carrinhoService.quantidadeTotal.subscribe((data) => {
      this.quantidadeTotal = data;
    });
  }

}
