import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produto: Produto = new Produto

  // listaProduto = [{ nome: '', foto: '', descricao: '', preco: 0.00, tipo: '', quantidade: 0 }];
  listaProduto: Produto[];
  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.listaProduto = params['id'];
    //   console.log(this.route.params);
    // });

    // this.listaProduto = [
    //   { id: 1, estoque: 1, nome: 'Banana', imagem: 'g', descricao: 'Descrição da banana', preco: 5.99, quantidade: 2 },
    //   { id: 2, estoque: 1, nome: 'Banana Prata', imagem: 'g', descricao: 'Descrição da banana', preco: 5.99, quantidade: 2 }]
    let id = this.route.snapshot.params['id'];
    this.buscarIdProduto(id);
    this.listaProduto = [];
  }

  buscarIdProduto(id: number) {
    console.log("this.route.params....." + id);
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
      console.log("testezasssooooo");
      console.log(this.produto)
      console.log(this.listaProduto)
      this.listaProduto.push(this.produto)
    })

  }

  removerQtdProduto = (index: any) => {
    this.listaProduto[index].quantidade = this.listaProduto[index].quantidade - 1;
    if (this.listaProduto[index].quantidade == 0) {
      //exibir um alerta de confirmação, se deseja remover o item
    }
  }
  addQtdProduto = (index: any) => {
    this.listaProduto[index].quantidade = this.listaProduto[index].quantidade + 1;
  }
  removeItemProduto = (index: any) => {

    index != 0 ? this.listaProduto.splice(index, index) : this.listaProduto.splice(0, 1);

  }

  calculaSubTotal = (preco: any, quantidade: any) => {
    if (preco && quantidade) {
      return preco * quantidade;
    }
    return 0.00;
  }

  retornaCatalogo() {
    this.router.navigate(['/catalogo']);
  }

  finalizarCompra() {

    this.router.navigate(['/home']);//quando cadastrar automaticamente vai para essa pagina(rota)
    Swal.fire(
      {
        title: 'Obrigada!',
        text: 'Sua compra foi finalizada com sucesso! Rumo à um futuro mais verde!',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#75DC36',
        showCancelButton: false,
      });
  }

}