import { RouterModule, Routes } from '@angular/router';
import { TelaApresentacaoComponent } from './tela-apresentacao/tela-apresentacao.component';
import { LogarComponent } from './logar/logar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
// <<<<<<< HEAD
import { NgModule } from '@angular/core';
import { FormularioVisitaComponent } from './formulario-visita/formulario-visita.component';
import { PerfilProdutoComponent } from './perfil-produto/perfil-produto.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
// >>>>>>> 0887e5401e462cc75de8ed93aec92ed19b6c1177

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'agendamento', component: FormularioVisitaComponent },
  { path: 'home', component: TelaApresentacaoComponent },
  { path: 'login', component: LogarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  {path: 'perfil-produtos', component: PerfilProdutoComponent},
  {path: 'catalogo', component: TelaInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


export class AppRoutingModule { }



