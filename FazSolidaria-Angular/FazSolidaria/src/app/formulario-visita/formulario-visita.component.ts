import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-visita',
  templateUrl: './formulario-visita.component.html',
  styleUrls: ['./formulario-visita.component.css']
})
export class FormularioVisitaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void{
  }


  cadastrar() {
    
      this.router.navigate(['/home']);//quando cadastrar automaticamente vai para essa pagina(rota)
      alert('Cadastro feito com sucesso!');
  }

}
