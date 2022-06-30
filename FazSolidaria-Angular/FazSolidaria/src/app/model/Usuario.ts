import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";

export class Usuario{
    public id:number;
    public cpf:string;
    public nome:string;
    public usuario:string;
    public senha:string;
    public dataNasc:string;
    public telefone:string;
    public foto:string;
    public tipo:string;
    public endereco:Endereco[];
    public pedidos: Pedido[];
}