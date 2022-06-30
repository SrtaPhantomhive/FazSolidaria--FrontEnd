import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
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
import { AuthService } from '../service/auth.service';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import { CkeckoutService } from '../service/ckeckout.service';
import { EnderecoService } from '../service/endereco.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup: FormGroup;
  endereco: Endereco = new Endereco();

  idUsuario: number;
  usuario: Usuario = new Usuario();

  totalPrice: number = 0;
  totalQuantity: number = 0;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  cartItems: ItensCarrinho[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private carrinhoService: CarrinhoServeService,
    private enderecoService: EnderecoService,
    private checkoutService: CkeckoutService,

    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente!');
      this.router.navigate(['/login']);
    }
    this.idUsuario = environment.id;
    this.buscarIdUsuario(this.idUsuario);
    console.log(this.usuario);

    this.reviewCartTotals();

    this.listCartDetails();

    console.log()
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
      (data) => (this.totalPrice = data)
    );

    // subscribe to the cart totalQuantity
    this.carrinhoService.quantidadeTotal.subscribe(
      (data) => (this.totalQuantity = data)
    );
    // compute cart total price and quantity
    this.carrinhoService.calcularTotalCarrinho();
  }

  reviewCartTotals() {
    this.carrinhoService.precoTotal.subscribe(
      (data) => (this.totalPrice = data)
    );

    this.carrinhoService.quantidadeTotal.subscribe(
      (data) => (this.totalQuantity = data)
    );
  }

  onSubmit() {
    // criacao pedido - set up order
    let pedido = new Pedido();
    pedido.precoTotal = this.totalPrice;
    pedido.quantidadeTotal = this.totalQuantity;

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

        Swal.fire(
          {
            title: 'Pedido Finalizado',
            text: `Número do Pedido: ${data.orderTrackingNumber}`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#75DC36',
            showCancelButton: false,
          });

        // reset checkout form
        console.log(purchase)
        this.resetCart();
      },
      (error) => {
        alert(`there was a error: ${error.message}`);
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

    // navigate back to the products page
    this.router.navigateByUrl('/catalogo');
  }

  calculaSubTotal = (preco: any, qtd: any) => {
    if (preco && qtd) {
      return preco * qtd;
    }
    return 0.0;
  };

  enderecoCadastrado(){
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
