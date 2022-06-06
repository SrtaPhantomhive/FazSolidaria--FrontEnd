import { Produto } from "./Produto";


export class Categoria {
  public id: number;
  public tipoAlimento: string;
  public produtos: Produto[];
}
