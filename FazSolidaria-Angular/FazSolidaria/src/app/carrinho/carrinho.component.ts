import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  listaProduto: Array<Produto> = [];
  produto: Produto = new Produto();
  carrinho = environment.carrinho
  // listaProduto = [{ nome: '', foto: '', descricao: '', preco: 0.00, tipo: '', quantidade: 0 }];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    // this.route.params.subscribe(params => {
    //   this.listaProduto = params['listaProduto'];
    // });
    // this.listaProduto = [{ nome: 'Banana', foto: '', descricao: 'Descrição da banana', preco: 5.99, tipo: 'Fruta', quantidade: 2 }, { nome: 'Maça', foto: '', descricao: 'Descrição da maça', preco: 9.99, tipo: 'Fruta', quantidade: 2 }]

    // let id = this.route.snapshot.params['id'];
    // this.buscarPeloIdProduto(id);

    this.carrinhoCompleto()

  }

  removerQtdProduto = (index: any) => {
    // this.listaProduto[index].quantidade = this.listaProduto[index].quantidade - 1;
    this.listaProduto[index].estoque = this.listaProduto[index].estoque - 1;
    // this.listaProduto[index].estoque = 0 - 1;
    // if (this.listaProduto[index].quantidade === 0) {
    //exibir um alerta de confirmação, se deseja remover o item
    // }
  };
  addQtdProduto = (index: any) => {
    this.listaProduto[index].estoque = this.listaProduto[index].estoque + 1;
    // this.listaProduto[index].estoque = 0 + 1;
  };


  removeItemProduto = (index: any) => {
    this.listaProduto.splice(index);

  };

  // removeItemProduto(){
  //     this.listaProduto.splice()
    
    
  // }

  calculaSubTotal = (preco: any, quantidade: any) => {
    if (preco && quantidade) {
      return preco * quantidade;
    }
    return 0.0;
  };

  buscarPeloIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
      this.listaProduto.push(this.produto)
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
    }
  }
}

