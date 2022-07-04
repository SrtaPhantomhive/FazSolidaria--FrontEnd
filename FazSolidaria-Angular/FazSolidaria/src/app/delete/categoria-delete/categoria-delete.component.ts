import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = new Categoria()
  idCategoria: number

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //pagina inicia x=0 e y=0
    window.scroll(0,0)

    // toda vez que a atualiza a pagina ele retorna para a pag de login
    if(environment.token == ''){
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
      this.router.navigate(['/login'])
    }

    //pega o id e coloca na rota ativa
    this.idCategoria = this.route.snapshot.params['id']
    // na rota ativa apresenta o id escolhido para deletar
    this.buscarPeloIdCategoria(this.idCategoria)

  }

  buscarPeloIdCategoria(id: number){
    this.categoriaService.buscarIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  deletarCategoria(){
    this.categoriaService.deletarCategoria(this.idCategoria).subscribe(()=>{
      this.router.navigate(["/categorias"])
    })
  }

}
