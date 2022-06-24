import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-visita',
  templateUrl: './formulario-visita.component.html',
  styleUrls: ['./formulario-visita.component.css']
})
export class FormularioVisitaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
  }


  cadastrar() {
    
      this.router.navigate(['/home']);//quando cadastrar automaticamente vai para essa pagina(rota)
      alert('Cadastro feito com sucesso!');
  }

}
