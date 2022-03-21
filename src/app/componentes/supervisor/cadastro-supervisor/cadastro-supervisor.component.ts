import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SupervisorService } from './../../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { Supervisor } from 'src/app/models/supervisorModel';

@Component({
  selector: 'app-cadastro-supervisor',
  templateUrl: './cadastro-supervisor.component.html',
  styleUrls: ['./cadastro-supervisor.component.css']
})
export class CadastroSupervisorComponent implements OnInit {

  idSupervisorCadastrado: any

  supervisorCadastrado: boolean = false

  supervisor: Supervisor ={
    id_supervisor: '',
    su_nome: '',
    su_email: ''
  }

  constructor(private suService: SupervisorService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarSupervisor(){
    this.suService.cadastrarSupervisor(this.supervisor).subscribe({
      complete: () =>{
        alert("Supervisor cadastrado")
        this.suService.buscarSupervisorPeloNome(this.supervisor.su_nome).subscribe(res =>{
          console.log(res)
        })
      }, error:() =>{
        alert("Errooo")
      }
    })
  }
}
