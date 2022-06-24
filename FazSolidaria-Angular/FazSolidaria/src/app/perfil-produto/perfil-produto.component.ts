import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.css']
})
export class PerfilProdutoComponent implements OnInit {

  produto: Produto = new Produto()

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0) // quando minha pagina iniciar coloque no ponto  x e y = 0
    let id = this.route.snapshot.params['id']
    this.bucarIdProduto(id)
  }

  bucarIdProduto(id: number){
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
}