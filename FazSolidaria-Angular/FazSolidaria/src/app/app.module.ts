import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { PerfilProdutoComponent } from './perfil-produto/perfil-produto.component';
import { TelaApresentacaoComponent } from './tela-apresentacao/tela-apresentacao.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormularioVisitaComponent } from './formulario-visita/formulario-visita.component';
import { PagamentoComponent } from './pagamento/pagamento.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    LogarComponent,
    PerfilProdutoComponent,
    TelaApresentacaoComponent,
    TelaInicialComponent,
    CarrinhoComponent,
    FormularioVisitaComponent,
    PagamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
