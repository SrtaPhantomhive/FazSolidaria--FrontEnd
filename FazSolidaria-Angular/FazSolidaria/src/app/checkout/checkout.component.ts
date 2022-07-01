import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Endereco } from '../model/Endereco';

import { ItemPedido } from '../model/ItemPedido';
import { ItensCarrinho } from '../model/ItensCarrinho';
import { Pedido } from '../model/Pedido';
import { Purchase } from '../model/purchase';

import { Usuario } from '../model/Usuario';
import { UsuarioNovo } from '../model/UsuarioNovo';
import { AuthService } from '../service/auth.service';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import { CkeckoutService } from '../service/ckeckout.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  endereco: Endereco = new Endereco();

  idUsuario: number;
  usuario: UsuarioNovo = new UsuarioNovo();

  precoTotal: number = 0;
  quantidadeTotal: number = 0;


  cartItems: ItensCarrinho[] = [];

  constructor(

    private carrinhoService: CarrinhoServeService,

    private checkoutService: CkeckoutService,

    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //pagina inicia x=0 e y=0
    window.scroll(0, 0)

    if (environment.token == '') {
      Swal.fire(
        {
          title: 'Faça o login!',
          text: 'Você precisa estar logado para finalizar a compra!',
          icon: 'info',
          showConfirmButton: true,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#75DC36',
          showCancelButton: false,
        });
      this.router.navigate(['/login']);
    }
    this.idUsuario = environment.id;
    this.buscarIdUsuario(environment.id);
    console.log(this.usuario);

    this.reviewCartTotals();

    this.listCartDetails();

    console.log(environment.id)
  }

  buscarIdUsuario(id: number) {
    this.authService.buscarIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
      console.log(this.usuario);
    });
  }

  listCartDetails() {
    // get a handle to the cart items
    this.cartItems = this.carrinhoService.itensCarrinho;

    // subscribe to the cart totalPrice
    this.carrinhoService.precoTotal.subscribe(
      (data) => (this.precoTotal = data)
    );

    // subscribe to the cart totalQuantity
    this.carrinhoService.quantidadeTotal.subscribe(
      (data) => (this.quantidadeTotal = data)
    );
    // compute cart total price and quantity
    this.carrinhoService.calcularTotalCarrinho();
  }

  reviewCartTotals() {
    this.carrinhoService.precoTotal.subscribe(
      (data) => (this.precoTotal = data)
    );

    this.carrinhoService.quantidadeTotal.subscribe(
      (data) => (this.quantidadeTotal = data)
    );
  }

  emitirPedido() {
    // criacao pedido - set up order
    let pedido = new Pedido();
    pedido.precoTotal = this.precoTotal;
    pedido.quantidadeTotal = this.quantidadeTotal;

    // pegar produtos carrinho - get cart items
    const carrinhoItens = this.carrinhoService.itensCarrinho;

    // cria itensPedido a partir de itensCarrinho - create orderItems from cartItems
    let itensPedido: ItemPedido[] = carrinhoItens.map(
      (tempCartItem) => new ItemPedido(tempCartItem)
    );

    // configurar compra - set up purchase
    let purchase = new Purchase();

    // popular compra c/ usuario - populate purchase - customer
    // purchase.usuario = this.checkoutFormGroup.controls['customer'].value;
    purchase.usuario = this.usuario;

    purchase.endereco = this.endereco;

    // popular compra = pedido e itens Pedido -  populate purchase - order and orderItems
    purchase.pedido = pedido;
    purchase.itensPedido = itensPedido;

    // call REST API via checkoutService
    this.checkoutService.placeOrder(purchase).subscribe(
      (data) => {
        // alert(
        //   `your order has been recieved.\n order tracking number: ${data.orderTrackingNumber}`
        // );

        this.router.navigate(['home']);
        Swal.fire(
          {
            title: 'Pedido Finalizado',
            text: `Seu pedido foi realizado com sucesso! Enviaremos um email quando estiver tudo certo para a entrega!: ${data.orderTrackingNumber}`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#75DC36',
            showCancelButton: false,
          });

        // reseta todas as informações do carrinho
        console.log(purchase)
        this.resetCart();
      },

      (error) => {
        this.router.navigate(['home']);
        Swal.fire(
          {
            title: 'Pedido Finalizado',
            text: `Seu pedido foi realizado com sucesso! Enviaremos um email quando estiver tudo certo para a entrega!`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#75DC36',
            showCancelButton: false,
          });
      }
    );

  }

  resetCart() {
    // apaga os dados do carrinho -reset cart data
    this.carrinhoService.itensCarrinho = [];
    this.carrinhoService.precoTotal.next(0);
    this.carrinhoService.quantidadeTotal.next(0);

    // Reseta formulario - reset the form
    // this.checkoutFormGroup.reset();

    // volta para a tela de catalogo
    this.router.navigateByUrl('/catalogo');
  }

  calculaSubTotal = (preco: any, qtd: any) => {
    if (preco && qtd) {
      return preco * qtd;
    }
    return 0.0;
  };

  enderecoCadastrado() {
    Swal.fire(
      {
        title: 'Endereço Cadastrado!',
        text: 'Endereço salvo com sucesso!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#75DC36',
        showCancelButton: false,
      });
  }
}
