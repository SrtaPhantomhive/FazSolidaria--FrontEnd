import { RouterModule, Routes } from '@angular/router';
import { TelaApresentacaoComponent } from './tela-apresentacao/tela-apresentacao.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { FormularioVisitaComponent } from './formulario-visita/formulario-visita.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BuscaProdutoComponent } from './busca-produto/busca-produto.component';
import { HistoricoComprasComponent } from './historico-compras/historico-compras.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'agendamento', component: FormularioVisitaComponent,  data: {isHeader: true} },
  { path: 'home', component: TelaApresentacaoComponent, data: {isHeader: true} },
  { path: 'login', component: LogarComponent, data: {isHeader: true}  },
  { path: 'cadastrar', component: CadastrarComponent , data: {isHeader: true} },
  { path: 'carrinho', component: CarrinhoComponent, data: {isHeader: true}},
  { path: 'catalogo', component: TelaInicialComponent, data: {isHeader: true}},
  { path: 'categorias', component: CategoriaComponent, data: {isHeader: true}},
  { path: 'categoria-edit/:id', component: CategoriaEditComponent, data: {isHeader: true}},
  { path: 'categoria-delete/:id', component: CategoriaDeleteComponent, data: {isHeader: true}},
  { path: 'usuarios/:id', component: UsuarioEditComponent, data: {isHeader: true}},
  { path: 'cadastrar-produto', component: CadastroProdutoComponent, data: {isHeader: true}},
  { path: 'produto-edit/:id', component: ProdutoEditComponent, data: {isHeader: true}},
  { path: 'produto-delete/:id', component: ProdutoDeleteComponent, data: {isHeader: true}},
  { path: 'checkout', component: CheckoutComponent, data: {isHeader: true}},
  { path:'busca-produto/:nome', component: BuscaProdutoComponent, data: {isHeader: true}},
  { path: 'historico-compras', component: HistoricoComprasComponent, data: {isHeader: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})


export class AppRoutingModule { }



