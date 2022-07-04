import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-tela-apresentacao',
  templateUrl: './tela-apresentacao.component.html',
  styleUrls: ['./tela-apresentacao.component.css'],
})



export class TelaApresentacaoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
  }


}





