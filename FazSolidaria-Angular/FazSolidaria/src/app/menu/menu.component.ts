import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, AfterContentChecked {
  @Input() isHeader: boolean;
  idUser = environment.id;
  nome = environment.nome
  tipo = environment.tipo
  precoTotal: number = 0.0;
  quantidadeTotal: number = 0;
  nomeProduto: string;


  constructor(private carrinhoService: CarrinhoServeService, public authService: AuthService,   private router: Router,
   ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.atualizacaoCarrinho();
  }


  ngAfterContentChecked() {
    // this.tipoUser = localStorage.getItem('tipo')
    // this.nomeUser = localStorage.getItem('nome')
    this.nome = environment.nome
    this.tipo = environment.tipo
    this.idUser = environment.id
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
  
  sair() {
    this.router.navigate(['/catalogo']);
    environment.token = '';
    environment.nome = '';
    environment.id = 0;
  }


  
}
