import { EditarSupervisorComponent } from './componentes/supervisor/editar-supervisor/editar-supervisor.component';
import { CadastroSupervisorComponent } from './componentes/supervisor/cadastro-supervisor/cadastro-supervisor.component';
import { AtribuirCargoSupervisorComponent } from './componentes/supervisor/atribuir-cargo-supervisor/atribuir-cargo-supervisor.component';
import { ListaSupervisorComponent } from './componentes/supervisor/lista-supervisor/lista-supervisor.component';
import { ListaSupervisorCargoComponent } from './componentes/supervisor/lista-supervisor-cargo/lista-supervisor-cargo.component';
import { ListaBonificacaoComponent } from './componentes/bonificacao/lista-bonificacao/lista-bonificacao.component';
import { ListaFuncDaTurmaComponent } from './componentes/funcionario/lista-func-da-turma/lista-func-da-turma.component';
import { EditarFuncionarioComponent } from './componentes/funcionario/editar-funcionario/editar-funcionario.component';
import { CadastroFuncionarioComponent } from './componentes/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/funcionario/lista-funcionario/lista-funcionario.component';
import { EditarCargoComponent } from './componentes/cargo/editar-cargo/editar-cargo.component';
import { CadastroCargoComponent } from './componentes/cargo/cadastro-cargo/cadastro-cargo.component';
import { ListaCargoComponent } from './componentes/cargo/lista-cargo/lista-cargo.component';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { LoginComponent } from './templates/login/login.component';
import { HomeComponent } from './templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroBonificacaoComponent } from './componentes/bonificacao/cadastro-bonificacao/cadastro-bonificacao.component';
import { EditarBonificacaoComponent } from './componentes/bonificacao/editar-bonificacao/editar-bonificacao.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  //Rotas principais
  {path: "login", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent},

  //cargos
  {path: "cargos/list", component: ListaCargoComponent, canActivate: [AuthGuard]},
  {path: "cargo/add", component: CadastroCargoComponent, canActivate: [AuthGuard]},
  {path: "cargo/edicao/:id", component: EditarCargoComponent, canActivate: [AuthGuard]},

  //funcionarios
  {path: "funcionario/cadastro/:id_cargo", component: CadastroFuncionarioComponent, canActivate: [AuthGuard]},
  {path: "funcionario/list/:id_cargo", component: ListaFuncionarioComponent, canActivate: [AuthGuard]},
  {path: "funcionario/editar/:id_funcionario/:id_cargo", component: EditarFuncionarioComponent, canActivate: [AuthGuard]},
  {path: "funcionario/list", component: ListaFuncDaTurmaComponent},

  //bonificação
  {path: "cargo/funcionario/bonificacao/:id_funcionario", component:ListaBonificacaoComponent},
  {path: "cargo/funcionario/bonificacao/novo/:id_funcionario", component: CadastroBonificacaoComponent,canActivate: [AuthGuard]},
  {path: "cargo/funcionario/bonificacao/edit/:codigo/:id_funcionario", component: EditarBonificacaoComponent, canActivate: [AuthGuard]},

  //supervisor
  {path: "supervisor/list", component: ListaSupervisorComponent},
  {path: "supervisor/atribuir/:id_supervisor", component: AtribuirCargoSupervisorComponent},
  {path: "supervisor/add", component: CadastroSupervisorComponent},
  {path: "cargo/supervisor/list/:id_cargo", component: ListaSupervisorCargoComponent},
  {path: "supervisor/edit/:id_supervisor", component: EditarSupervisorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
