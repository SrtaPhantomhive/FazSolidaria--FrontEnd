import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
 listaProduto = [{nome:'',foto:'',descricao:'',preco:0.00,tipo:'',quantidade:0}];
  constructor() { }

  ngOnInit(): void {
     /*this.route.params.subscribe(params => {
      this.listaProduto = params['listaProduto'];
    });*/
    this.listaProduto = [{nome:'Banana',foto:'',descricao:'Descrição da banana',preco:5.99,tipo:'Fruta',quantidade:2},{nome:'Maça',foto:'',descricao:'Descrição da maça',preco:9.99,tipo:'Fruta',quantidade:2}]
  }

  removerQtdProduto=(index)=>{
    this.listaProduto[index].quantidade = this.listaProduto[index].quantidade - 1;
    if(this.listaProduto[index].quantidade === 0){
      //exibir um alerta de confirmação, se deseja remover o item
    }
  }
  addQtdProduto=(index)=>{
    this.listaProduto[index].quantidade = this.listaProduto[index].quantidade +1;
  }
  removeItemProduto=(index)=>{
    this.listaProduto.splice(index);
  }

  calculaSubTotal=(preco,quantidade)=>{
    if(preco && quantidade) {
      return preco * quantidade;
    }
    return 0.00;
  }

}
