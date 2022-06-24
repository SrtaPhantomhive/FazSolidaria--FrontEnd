import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.css']
})
export class PerfilProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
  }

}
