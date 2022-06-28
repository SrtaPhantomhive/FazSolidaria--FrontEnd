import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ItemPedido } from '../model/ItemPedido';
import { ItensCarrinho } from '../model/ItensCarrinho';
import { Pedido } from '../model/Pedido';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import { ItemPedidoService } from '../service/item-pedido.service';
import { PedidoService } from '../service/pedido.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  usuario: Usuario = new Usuario();
  pedido: Pedido = new Pedido();
  idUsuario = environment.id;
  // itensPedido: ItemPedido = new ItemPedido();

  cartItems: ItensCarrinho[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemPedidoService: ItemPedidoService,
    private pedidoService: PedidoService,
    private authService: AuthService,
    private carrinhoService: CarrinhoServeService
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    // this.detalhesCarrinho();
    // this.somatoriaTotal();

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

  // mostrarCarrinho: any = [];
  // detalhesCarrinho() {
  //   if (localStorage.getItem('ProdCarrinho')) {
  //     this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
  //     console.log(this.mostrarCarrinho);
  //   }
  // }

  // incrementoQtd(id: any, qtd: any) {
  //   for (let i = 0; i < this.mostrarCarrinho.length; i++) {
  //     if (this.mostrarCarrinho[i].id === id) {
  //       if (qtd != 5) {
  //         this.mostrarCarrinho[i].qtd = parseInt(qtd) + 1;
  //       }
  //     }
  //   }
  //   localStorage.setItem('ProdCarrinho', JSON.stringify(this.mostrarCarrinho));
  //   this.somatoriaTotal();
  // }

  // decrementoQtd(id: any, qtd: any) {
  //   for (let i = 0; i < this.mostrarCarrinho.length; i++) {
  //     if (this.mostrarCarrinho[i].id === id) {
  //       if (qtd != 1) {
  //         this.mostrarCarrinho[i].qtd = parseInt(qtd) - 1;
  //       }
  //     }
  //   }
  //   localStorage.setItem('ProdCarrinho', JSON.stringify(this.mostrarCarrinho));
  //   this.somatoriaTotal();
  // }

  //Somatoria de todos os itens
  // total: number = 0;
  // somatoriaTotal() {
  //   if (localStorage.getItem('ProdCarrinho')) {
  //     this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
  //     this.total = this.mostrarCarrinho.reduce(function (
  //       acumulador: any,
  //       valor: any
  //     ) {
  //       return acumulador + valor.preco * valor.qtd;
  //     },
  //     0);
  //   }
  // }

  //acc - acumulador

  //remove todo os itens
  // excluirTodosItensCarrinho() {
  //   localStorage.removeItem('ProdCarrinho');
  //   this.mostrarCarrinho = [];
  //   this.total = 0;
  // }

  // deletarProdutoCarrinho(pegaProdutoCarrinho: any) {
  //   if (localStorage.getItem('ProdCarrinho')) {
  //     this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
  //     for (let i = 0; i < this.mostrarCarrinho.length; i++) {
  //       if (this.mostrarCarrinho[i].id === pegaProdutoCarrinho) {
  //         this.mostrarCarrinho.splice(i, 1);
  //         localStorage.setItem(
  //           'ProdCarrinho',
  //           JSON.stringify(this.mostrarCarrinho)
  //         );
  //         this.somatoriaTotal();
  //       }
  //     }
  //   }
  // }

  buscarIdUsuario(id: number) {
    this.authService.buscarIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  // emitirPedido() {
  //   this.pedido.cliente = this.usuario;
  //   this.pedidoService.criarPedido(this.pedido).subscribe((resp: Pedido) => {
  //     this.pedido = resp;
  //     this.router.navigate(['/catalogo']);
  //     alert('Pedido Emitido');
  //   });
  // }

  // cadastrarItemPedido() {
  //   if (localStorage.getItem('ProdCarrinho')) {
  //     this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
  //     for (let i = 0; i < this.mostrarCarrinho.length; i++) {
  //       this.itemPedidoService.cadastrarItemPedido(this.itensPedido).subscribe((resp: ItemPedido) => {
  //           this.itensPedido = resp
  //         });
  //     }
  //   }
  // }

  mostrarItensCarrinho() {

    // get a handle to the cart items
    this.cartItems = this.carrinhoService.itensCarrinho;

    // subscribe to the cart totalPrice
    this.carrinhoService.precoTotal.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.carrinhoService.quantidadeTotal.subscribe(
      data => this.totalQuantity = data
    );
    // compute cart total price and quantity
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
    this.cartItems = []
    this.carrinhoService.removerTodosItens()
}
}

