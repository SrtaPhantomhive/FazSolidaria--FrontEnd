import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  listaProduto: Produto[];
  produto: Produto = new Produto();
  // listaProduto = [{ nome: '', foto: '', descricao: '', preco: 0.00, tipo: '', quantidade: 0 }];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listaProduto = params['listaProduto'];
    });
    // this.listaProduto = [{ nome: 'Banana', foto: '', descricao: 'Descrição da banana', preco: 5.99, tipo: 'Fruta', quantidade: 2 }, { nome: 'Maça', foto: '', descricao: 'Descrição da maça', preco: 9.99, tipo: 'Fruta', quantidade: 2 }]

    let id = this.route.snapshot.params['id'];
    this.buscarPeloIdProduto(id);
  }

  removerQtdProduto = (index: any) => {
    // this.listaProduto[index].quantidade = this.listaProduto[index].quantidade - 1;
    this.listaProduto[index].estoque = this.listaProduto[index].estoque - 1;
    // if (this.listaProduto[index].quantidade === 0) {
    //exibir um alerta de confirmação, se deseja remover o item
    // }
  };
  addQtdProduto = (index: any) => {
    this.listaProduto[index].estoque = this.listaProduto[index].estoque + 1;
  };
  removeItemProduto = (index: any) => {
    this.listaProduto.splice(index);
  };

  calculaSubTotal = (preco: any, quantidade: any) => {
    if (preco && quantidade) {
      return preco * quantidade;
    }
    return 0.0;
  };

  buscarPeloIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }
}
