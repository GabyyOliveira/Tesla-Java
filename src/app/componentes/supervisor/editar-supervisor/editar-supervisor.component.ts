import { ActivatedRoute } from '@angular/router';
import { Supervisor } from 'src/app/models/supervisorModel';
import { SupervisorService } from './../../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-supervisor',
  templateUrl: './editar-supervisor.component.html',
  styleUrls: ['./editar-supervisor.component.css']
})
export class EditarSupervisorComponent implements OnInit {
  id_supervisor: any
  idSupervisorEditado: any

  supervisor: Supervisor ={
    id_supervisor: '',
    su_nome: '',
    su_email: ''
  }

  constructor(private suService: SupervisorService, private route: ActivatedRoute, private location: Location) {
    this.id_supervisor = this.route.snapshot.paramMap.get('id_supervisor')
  }

  ngOnInit(): void {
    this.buscarSupervisor()
  }

  buscarSupervisor(){
    this.suService.buscarUmSupervisor(this.id_supervisor).subscribe(res =>{
      console.log(res)
      this.supervisor = res
    })
  }

  editarSupervisor(){
    this.suService.editarSupervisorSemCargo(this.supervisor, this.id_supervisor).subscribe({
      complete: () =>{
        alert("Supervisor editado")
        this.location.back()
      },
      error: () =>{
        alert("Erro ao editar supervisor")
        this.location.back()
      }
    })
  }

}
