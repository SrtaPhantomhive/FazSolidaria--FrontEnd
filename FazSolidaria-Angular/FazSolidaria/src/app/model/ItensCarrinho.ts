import { Produto } from "./Produto";

export class ItensCarrinho{
    id: number;
    nome: string;
    imagem:string;
    preco: number
    qtd: number;

    constructor(produto: Produto){
        this.id = produto.id
        this.nome = produto.nome
        this.imagem = produto.imagem
        this.preco = produto.preco
        this.qtd = 1
    }
}