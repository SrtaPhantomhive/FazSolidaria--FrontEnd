import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { ItemPedido } from '../model/ItemPedido';
import { Pedido } from '../model/Pedido';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { ItemPedidoService } from '../service/item-pedido.service';
import { PedidoService } from '../service/pedido.service';
import { ProdutoService } from '../service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  usuario: Usuario = new Usuario();
  pedido: Pedido = new Pedido();
  idUsuario = environment.id;
  itensPedido: ItemPedido = new ItemPedido();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemPedidoService: ItemPedidoService,
    private pedidoService: PedidoService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    this.detalhesCarrinho();
    this.somatoriaTotal();

    this.idUsuario = environment.id;
    this.buscarIdUsuario(this.idUsuario);
  }

  calculaSubTotal = (preco: any, qtd: any) => {
    if (preco && qtd) {
      return preco * qtd;
    }
    return 0.0;
  };

  mostrarCarrinho: any = [];
  detalhesCarrinho() {
    if (localStorage.getItem('ProdCarrinho')) {
      this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
      console.log(this.mostrarCarrinho);
    }
  }

  incrementoQtd(id: any, qtd: any) {
    for (let i = 0; i < this.mostrarCarrinho.length; i++) {
      if (this.mostrarCarrinho[i].id === id) {
        if (qtd != 5) {
          this.mostrarCarrinho[i].qtd = parseInt(qtd) + 1;
        }
      }
    }
    localStorage.setItem('ProdCarrinho', JSON.stringify(this.mostrarCarrinho));
    this.somatoriaTotal();
  }

  decrementoQtd(id: any, qtd: any) {
    for (let i = 0; i < this.mostrarCarrinho.length; i++) {
      if (this.mostrarCarrinho[i].id === id) {
        if (qtd != 1) {
          this.mostrarCarrinho[i].qtd = parseInt(qtd) - 1;
        }
      }
    }
    localStorage.setItem('ProdCarrinho', JSON.stringify(this.mostrarCarrinho));
    this.somatoriaTotal();
  }

  //Somatoria de todos os itens
  total: number = 0;
  somatoriaTotal() {
    if (localStorage.getItem('ProdCarrinho')) {
      this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
      this.total = this.mostrarCarrinho.reduce(function (
        acumulador: any,
        valor: any
      ) {
        return acumulador + valor.preco * valor.qtd;
      },
      0);
    }
  }

  //acc - acumulador

  //remove todo os itens
  excluirTodosItensCarrinho() {
    localStorage.removeItem('ProdCarrinho');
    this.mostrarCarrinho = [];
    this.total = 0;
  }

  deletarProdutoCarrinho(pegaProdutoCarrinho: any) {
    if (localStorage.getItem('ProdCarrinho')) {
      this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
      for (let i = 0; i < this.mostrarCarrinho.length; i++) {
        if (this.mostrarCarrinho[i].id === pegaProdutoCarrinho) {
          this.mostrarCarrinho.splice(i, 1);
          localStorage.setItem(
            'ProdCarrinho',
            JSON.stringify(this.mostrarCarrinho)
          );
          this.somatoriaTotal();
        }
      }
    }
  }

  buscarIdUsuario(id: number) {
    this.authService.buscarIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  emitirPedido() {
    this.pedido.cliente = this.usuario;
    this.pedidoService.criarPedido(this.pedido).subscribe((resp: Pedido) => {
      this.pedido = resp;
      this.router.navigate(['/catalogo']);
      alert('Pedido Emitido');
    });
  }

  retornaCatalogo() {
    this.router.navigate(['/catalogo']);
  }

  finalizarCompra() {

    this.router.navigate(['/home']);//quando cadastrar automaticamente vai para essa pagina(rota)
    Swal.fire(
      {
        title: 'Obrigada!',
        text: 'Sua compra foi finalizada com sucesso! Rumo à um futuro mais verde!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#75DC36',
        showCancelButton: false,
      });
  }


  carrinhoCompleto(){
    for(let item in this.carrinho){
      if(this.carrinho[item] > 0){
        let id = this.carrinho[item]
        this.buscarPeloIdProduto(id)
      } 

  cadastrarItemPedido() {
    if (localStorage.getItem('ProdCarrinho')) {
      this.mostrarCarrinho = JSON.parse(localStorage.getItem('ProdCarrinho')!);
      for (let i = 0; i < this.mostrarCarrinho.length; i++) {
        this.itemPedidoService.cadastrarItemPedido(this.itensPedido).subscribe((resp: ItemPedido) => {
            this.itensPedido = resp
          });
      }
    }
  }
}

