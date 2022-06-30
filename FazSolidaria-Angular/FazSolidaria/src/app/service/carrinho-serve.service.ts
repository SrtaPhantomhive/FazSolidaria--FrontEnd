import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ItensCarrinho } from '../model/ItensCarrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoServeService {
  
  itensCarrinho: ItensCarrinho[] = [];
  precoTotal: Subject<number> = new BehaviorSubject<number>(0);
  quantidadeTotal: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  adicionarAoCarrinho(itemCarrinho: ItensCarrinho){
    // Verificar se ja existe o item no carrinho
    let jaExisteNoCarrinho: boolean = false;
    let itemCarrinhoExistente: ItensCarrinho = undefined!;

    if(this.itensCarrinho.length > 0){
          //encontre o item no carrinho com base no ID do item
          itemCarrinhoExistente = this.itensCarrinho.find(tempCartItem => tempCartItem.id === itemCarrinho.id)!;
          // Verificar se ja existe
          jaExisteNoCarrinho = (itemCarrinhoExistente != undefined);
    }

    if(jaExisteNoCarrinho){
      // Incrementar Quantidade Carrinho
      itemCarrinhoExistente.qtd++;
    }else{
      // Adicionando Item no Carrinho
      this.itensCarrinho.push(itemCarrinho);
    }
    
    // compute the totals
    this.calcularTotalCarrinho();
  }

  calcularTotalCarrinho() {
    let valorTotalPreco: number =0;
    let valorTotalQuantidade: number =0;

    for(let tempCartItem of this.itensCarrinho){
      valorTotalPreco += tempCartItem.qtd * tempCartItem.preco; 
      valorTotalQuantidade += tempCartItem.qtd;
    }

    // mostra os novos valores para o usuario
    this.precoTotal.next(valorTotalPreco);
    this.quantidadeTotal.next(valorTotalQuantidade);

    // registre os dados do carrinho apenas para fins de depuração
    this.registroDadosCarrinho( valorTotalPreco , valorTotalQuantidade);
  }


  registroDadosCarrinho(valorTotalPreco: number, valorTotalQuantidade: number) {
    console.log('----------- Itens do Carrinho --------')
    for(let itemTemporarioCarrinho of this.itensCarrinho){
      let subTotalPreço = itemTemporarioCarrinho.preco * itemTemporarioCarrinho.qtd;
      console.log(`Nome: ${itemTemporarioCarrinho.nome}, Quantidade: ${itemTemporarioCarrinho.qtd}, preço: ${itemTemporarioCarrinho.preco}, subTotalPreço: ${subTotalPreço} `);
      console.log(`PreçoTotal: ${valorTotalPreco}, QuantidadeTotal: ${valorTotalQuantidade}`);
    }
  }


  decrementarQuantidade(itemCarrinho: ItensCarrinho) {
    itemCarrinho.qtd--;
     if(itemCarrinho.qtd == 0){
       this.removeCartItem(itemCarrinho);
     }else{
       this.calcularTotalCarrinho();
     }
  }

  removeCartItem(itemCarrinho: ItensCarrinho) {
    // pega o indice do item no array(matriz)
    const itemIndex = this.itensCarrinho.findIndex(itemTemporarioCarrinho => itemTemporarioCarrinho.id == itemCarrinho.id);
    // se encontrado, remova o item do aray no índice fornecido
    if(itemIndex > -1){
      this.itensCarrinho.splice(itemIndex, 1);
      this.calcularTotalCarrinho();
    }
  }

  removerTodosItens(){
    this.itensCarrinho = [];
    this.calcularTotalCarrinho();
  }


}
