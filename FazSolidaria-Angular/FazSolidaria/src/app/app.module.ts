import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { MenuCompactoComponent } from './menu-compacto/menu-compacto.component';
import { MenuComprasComponent } from './menu-compras/menu-compras.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MenuApresentacaoComponent } from './menu-apresentacao/menu-apresentacao.component';


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
    MenuCompactoComponent,
    MenuComprasComponent,
    MenuLogadoComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    UsuarioEditComponent,
    MenuApresentacaoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
