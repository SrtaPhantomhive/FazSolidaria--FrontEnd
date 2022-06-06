import { Usuario } from "./Usuario";

export class Endereco{
    public id:number;
    public cep:string;
    public logradouro:string;
    public bairro:string;
    public localidade:string;
    public uf:string;
    public numero:string;
    public usuario:Usuario;
}