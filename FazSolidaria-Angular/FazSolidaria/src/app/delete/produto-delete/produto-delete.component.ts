import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css'],
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto = new Produto();
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0

    // toda vez que a atualiza a pagina ele retorna para a pag de login
    if (environment.token == '') {
      if (environment.token == '') {
        Swal.fire(
          {
            title: 'Sua sessão expirou!',
            text: `Por favor, faça seu login novamente!`,
            icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            confirmButtonColor: '#75DC36',
            showCancelButton: false,
          });
        this.router.navigate(['/login']);
      }
      this.router.navigate(['/login']);
    }

    this.idProduto = this.route.snapshot.params['id']

    this.buscarPeloIdProduto(this.idProduto)
  }

  buscarPeloIdProduto(id: number) {
    this.produtoService.buscarPeloIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

  deletarProduto(){
    this.produtoService.deletarProduto(this.idProduto).subscribe(()=>{
      this.router.navigate(["/cadastrar-produto"])
    })
  }
}
