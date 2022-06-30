
import { Endereco } from './Endereco';
import { ItemPedido } from './ItemPedido';
import { Pedido } from './Pedido';
import { UsuarioNovo } from './UsuarioNovo';

export class Purchase {
  usuario: UsuarioNovo;
  endereco: Endereco;
  pedido: Pedido;
  itensPedido: ItemPedido[];
}
