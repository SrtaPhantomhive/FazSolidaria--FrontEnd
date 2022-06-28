import { RouterModule, Routes } from '@angular/router';
import { TelaApresentacaoComponent } from './tela-apresentacao/tela-apresentacao.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { FormularioVisitaComponent } from './formulario-visita/formulario-visita.component';
import { PerfilProdutoComponent } from './perfil-produto/perfil-produto.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { HistoricoComprasComponent } from './historico-compras/historico-compras.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'agendamento', component: FormularioVisitaComponent },
  { path: 'home', component: TelaApresentacaoComponent },
  { path: 'login', component: LogarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'perfil-produtos/:id', component: PerfilProdutoComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'catalogo', component: TelaInicialComponent},
  { path: 'categorias', component: CategoriaComponent},
  { path: 'categoria-edit/:id', component: CategoriaEditComponent},
  { path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  { path: 'usuarios/:id', component: UsuarioEditComponent},
  { path: 'cadastrar-produto', component: CadastroProdutoComponent},
  { path: 'produto-edit/:id', component: ProdutoEditComponent},
  { path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  { path: 'pedidos', component: HistoricoComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }



