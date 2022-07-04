import { ItensCarrinho } from "./ItensCarrinho";


export class ItemPedido{

    imagem: string;
    precoUnitario: number;
    quantidade: number;
    produtoId: number;


    constructor(itemCarrinho: ItensCarrinho){
        this.imagem = itemCarrinho.imagem
        this.precoUnitario = itemCarrinho.preco
        this.quantidade = itemCarrinho.qtd
        this.produtoId = itemCarrinho.id
    }
}