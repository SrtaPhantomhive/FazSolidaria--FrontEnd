import { ItemPedido } from "./ItemPedido";
import { StatusPedido } from "./StatusPedido";
import { Usuario } from "./Usuario";

export class Pedido{
    public id:number;
    public subtotal:number;
    public frete:number;
    public valorTotal:number;
    public status:StatusPedido;
    public dataConfirmacao:Date;
    public dataCancelamento:Date;
    public dataEntrega:Date;
    public usuario:Usuario;
    public itens:ItemPedido[];

}