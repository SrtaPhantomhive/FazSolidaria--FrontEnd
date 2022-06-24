import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-visita',
  templateUrl: './formulario-visita.component.html',
  styleUrls: ['./formulario-visita.component.css']
})
export class FormularioVisitaComponent implements OnInit {

  constructor(private router: Router) { }

<<<<<<< HEAD
  ngOnInit(){
    window.scroll(0, 0); // quando minha pagina iniciar coloque no ponto  x e y = 0
=======
  ngOnInit(): void {
>>>>>>> cbdeb84e2e43114632e1d0c6a2faac3214dc0190
  }


  cadastrar() {

    this.router.navigate(['/home']);//quando cadastrar automaticamente vai para essa pagina(rota)
    Swal.fire(
      {
        title: 'Obrigada!',
        text: 'Agora é só aguardar! Iremos retornar assim que possível.',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#75DC36',
        showCancelButton: false,
      });
  }

}
