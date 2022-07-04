import { Categoria } from "./Categoria";


export class Produto{
    public id:number;
    public nome:string;
    public preco:number;
    public estoque:number;
    public imagem:string;
    public descricao:string;
    public qtd:number;
    public categoria:Categoria;
  

}