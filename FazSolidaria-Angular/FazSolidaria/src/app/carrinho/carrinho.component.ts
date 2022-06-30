import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ItensCarrinho } from '../model/ItensCarrinho';
import { Pedido } from '../model/Pedido';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoServeService } from '../service/carrinho-serve.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  usuario: Usuario = new Usuario();
  pedido: Pedido = new Pedido();
  idUsuario = environment.id;

  itensCarrinho: ItensCarrinho[] = [];
  precoTotal: number = 0;
  quantidadeTotal: number = 0;

  constructor(
    private authService: AuthService,
    private carrinhoService: CarrinhoServeService
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    this.mostrarItensCarrinho();

    this.idUsuario = environment.id;
    this.buscarIdUsuario(this.idUsuario);
  }
  calculaSubTotal = (preco: any, qtd: any) => {
    if (preco && qtd) {
      return preco * qtd;
    }
    return 0.0;
  };

  buscarIdUsuario(id: number) {
    this.authService.buscarIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }
  mostrarItensCarrinho() {

    // pega os itens do carrinho
    this.itensCarrinho = this.carrinhoService.itensCarrinho;

    // pega o preço total e armazena 
    this.carrinhoService.precoTotal.subscribe(
      data => this.precoTotal = data
    );

    // pega a quantidade do carrinho e armazena
    this.carrinhoService.quantidadeTotal.subscribe(
      data => this.quantidadeTotal = data
    );
    // calculo do preco total * quantidade
      this.carrinhoService.calcularTotalCarrinho();
  }
  incrementarQuantidade(itemCarrinho: ItensCarrinho){
    this.carrinhoService.adicionarAoCarrinho(itemCarrinho);
  }
  decrementarQuantidade(itemCarrinho: ItensCarrinho){
    this.carrinhoService.decrementarQuantidade(itemCarrinho);
  }

  removerItemCarrinho(itemCarrinho: ItensCarrinho){
    this.carrinhoService.removeCartItem(itemCarrinho);
  }
  excluiTodosItens(){
    this.itensCarrinho = []
    this.carrinhoService.removerTodosItens()
}
}


