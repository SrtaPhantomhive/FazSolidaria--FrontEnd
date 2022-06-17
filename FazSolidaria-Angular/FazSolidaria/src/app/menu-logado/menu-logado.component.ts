import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css'],
})
export class MenuLogadoComponent implements OnInit {
  nome = environment.nome;
  id = environment.id;
  listaCategorias: Categoria[];
  idCategoria: number;
  categoria: Categoria = new Categoria();
  produto: Produto = new Produto();
  

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    //Mostra todas as categorias cadastradas quando entra nessa rota
    this.mostrarCategoriasCadastradas();

    console.log("Token edit-usuario:" + environment.token)
  }

  mostrarCategoriasCadastradas() {
    this.categoriaService
      .mostrarCategoriasCadastradas()
      .subscribe((resp: Categoria[]) => {
        this.listaCategorias = resp;
      });
  }

  buscarPeloIdCategoria() {
    this.categoriaService
      .buscarIdCategoria(this.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }


  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.cadastrarProduto(this.produto).subscribe((resp:Produto)=>{
      this.produto=resp
      alert('Cadastro do Produto Realizado')
      this.produto = new Produto()
    })

  }

  sair() {
    this.router.navigate(['/catalogo']);
    environment.token = '';
    environment.nome = '';
    environment.id = 0;
  }
}
