import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ItensCarrinho } from '../model/ItensCarrinho';
import { Produto } from '../model/Produto';
import { CarrinhoServeService } from '../service/carrinho-serve.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-busca-produto',
  templateUrl: './busca-produto.component.html',
  styleUrls: ['./busca-produto.component.css']
})
export class BuscaProdutoComponent implements OnInit {
  produtos: Produto[] = []
  nomeProcurado: string
  produtoEsp: Produto = new Produto();
  subscription: any;
  constructor(
    private carrinhoService: CarrinhoServeService, private produtoService: ProdutoService, private route: ActivatedRoute,  private router: Router
  ) { 
  }

  ngOnInit(){
   
      let nome = this.route.snapshot.params['nome']
      this.buscarPeloNomeProduto(nome);
    

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let nome = event.url
        nome = nome.split('/')[2]
        this.buscarPeloNomeProduto(nome)
      }
   });

  }

  refresh(): void {
    window.location.reload();
}

  
  buscarPeloNomeProduto(nome:string){
    this.produtoService.buscarPeloNomeProduto(nome).subscribe((resp:Produto[])=>{
      this.produtos = resp;
    })
    this.nomeProcurado = nome;
    console.log('passou aqui')
  }


  adicionarCarrinho(produto: Produto) {
    const itensCarrinho = new ItensCarrinho(produto);
    this.carrinhoService.adicionarAoCarrinho(produto);
    alert('Adicionado ao carrinho');
  }

  
  mostrarProduto(produto: Produto) {
    this.produtoEsp = produto;
    console.log(this.produtoEsp);
  }
}
