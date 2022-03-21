import { AuthGuard } from './guards/auth-guard';
import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFuncionarioComponent } from './componentes/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { CadastroCargoComponent } from './componentes/cargo/cadastro-cargo/cadastro-cargo.component';
import { CadastroSupervisorComponent } from './componentes/supervisor/cadastro-supervisor/cadastro-supervisor.component';
import { CadastroBonificacaoComponent } from './componentes/bonificacao/cadastro-bonificacao/cadastro-bonificacao.component';
import { HeaderComponent } from './templates/header/header.component';
import { LoginComponent } from './templates/login/login.component';
import { HomeComponent } from './templates/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtribuirCargoComponent } from './componentes/funcionario/atribuir-cargo/atribuir-cargo.component';
import { EditarFuncionarioComponent } from './componentes/funcionario/editar-funcionario/editar-funcionario.component';
import { ListaFuncionarioComponent } from './componentes/funcionario/lista-funcionario/lista-funcionario.component';
import { ListaFuncDaTurmaComponent } from './componentes/funcionario/lista-func-da-turma/lista-func-da-turma.component';
import { EditarBonificacaoComponent } from './componentes/bonificacao/editar-bonificacao/editar-bonificacao.component';
import { ListaBonificacaoComponent } from './componentes/bonificacao/lista-bonificacao/lista-bonificacao.component';
import { AtribuirCargoSupervisorComponent } from './componentes/supervisor/atribuir-cargo-supervisor/atribuir-cargo-supervisor.component';
import { ListaSupervisorCargoComponent } from './componentes/supervisor/lista-supervisor-cargo/lista-supervisor-cargo.component';
import { EditarCargoComponent } from './componentes/cargo/editar-cargo/editar-cargo.component';
import { ListaCargoComponent } from './componentes/cargo/lista-cargo/lista-cargo.component';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { ListaSupervisorComponent } from './componentes/supervisor/lista-supervisor/lista-supervisor.component';
import { EditarSupervisorComponent } from './componentes/supervisor/editar-supervisor/editar-supervisor.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncionarioComponent,
    CadastroCargoComponent,
    CadastroSupervisorComponent,
    CadastroBonificacaoComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AtribuirCargoComponent,
    EditarFuncionarioComponent,
    ListaFuncionarioComponent,
    ListaFuncDaTurmaComponent,
    EditarBonificacaoComponent,
    ListaBonificacaoComponent,
    AtribuirCargoSupervisorComponent,
    ListaSupervisorCargoComponent,
    EditarCargoComponent,
    ListaCargoComponent,
    DashboardComponent,
    ListaSupervisorComponent,
    EditarSupervisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
