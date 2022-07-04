import { HttpClientModule } from '@angular/common/http'
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// carosel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LogarComponent } from './logar/logar.component';
import { TelaApresentacaoComponent } from './tela-apresentacao/tela-apresentacao.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormularioVisitaComponent } from './formulario-visita/formulario-visita.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { MenuCompactoComponent } from './menu-compacto/menu-compacto.component';
import { MenuComprasComponent } from './menu-compras/menu-compras.component';

import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MenuApresentacaoComponent } from './menu-apresentacao/menu-apresentacao.component';

import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { HistoricoComprasComponent } from './historico-compras/historico-compras.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    LogarComponent,
    TelaApresentacaoComponent,
    TelaInicialComponent,
    CarrinhoComponent,
    FormularioVisitaComponent,
    PagamentoComponent,
    MenuCompactoComponent,
    MenuComprasComponent,
    CategoriaComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    UsuarioEditComponent,
    MenuApresentacaoComponent,
    CadastroProdutoComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    HistoricoComprasComponent,   
    CheckoutComponent,
    BuscaProdutoComponent,   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule  

  ],
  providers: [
    
    {
    // faz com que o angular nao ser perca nas rota, durante esse vai e vem, evita o erro 404
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
