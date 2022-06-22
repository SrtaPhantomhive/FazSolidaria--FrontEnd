import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // permitir acesso no html que gerencia os componentes app.component.html', aos metodos(funções)
  constructor(public auth: AuthService){}

  title = 'FazSolidaria';
}


