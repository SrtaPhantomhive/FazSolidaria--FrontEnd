import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

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
