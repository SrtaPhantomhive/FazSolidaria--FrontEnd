import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class ItemPedido{
    public id:number;
    public pedido:Pedido;
    public produto:Produto;
    public precoUnitario:number;
    public precoTotal:number;
    public quantidade:number;
}