import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }
// Evento para scrooll lenta
  toInicio(){
    document.getElementById('inicio')?.scrollIntoView({behavior:"smooth"});
  }

  toCertificacao(){
    document.getElementById('certificados')?.scrollIntoView({behavior:"smooth"});
  }

  toSobreNos(){
    document.getElementById('sobreNos')?.scrollIntoView({behavior:"smooth"});
  }

  toMissao(){
    document.getElementById('missao')?.scrollIntoView({behavior:"smooth"});
  }

  toEquipe(){
    document.getElementById('equipe')?.scrollIntoView({behavior:"smooth"});
  }

}
