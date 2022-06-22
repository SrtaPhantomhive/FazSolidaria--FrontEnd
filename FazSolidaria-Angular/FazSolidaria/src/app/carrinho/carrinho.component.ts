import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produto: Produto = new Produto

  // listaProduto = [{ nome: '', foto: '', descricao: '', preco: 0.00, tipo: '', quantidade: 0 }];
  listaProduto: Produto[];
  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listaProduto = params['id'];
      console.log(this.route.params);
    });
    // this.listaProduto = [{ nome: 'Banana', foto: '', descricao: 'Descrição da banana', preco: 5.99, tipo: 'Fruta', quantidade: 2 }, { nome: 'Maça', foto: '', descricao: 'Descrição da maça', preco: 9.99, tipo: 'Fruta', quantidade: 2 }]
    let id = this.route.snapshot.params['id'];
    this.buscarIdProduto(id);
  }

  buscarIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })

  }

  removerQtdProduto = (index: any) => {
    this.listaProduto[index].quantidade = this.listaProduto[index].quantidade - 1;
    if (this.listaProduto[index].quantidade == 0) {
      //exibir um alerta de confirmação, se deseja remover o item
    }
  }
  addQtdProduto = (index: any) => {
    this.listaProduto[index].quantidade = this.listaProduto[index].quantidade + 1;
  }
  removeItemProduto = (index: any) => {
    this.listaProduto.splice(index);
  }

  calculaSubTotal = (preco: any, quantidade: any) => {
    if (preco && quantidade) {
      return preco * quantidade;
    }
    return 0.00;
  }

}