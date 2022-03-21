import { SupervisorService } from './../../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-supervisor',
  templateUrl: './lista-supervisor.component.html',
  styleUrls: ['./lista-supervisor.component.css']
})
export class ListaSupervisorComponent implements OnInit {

  supervisores: any =[]

  constructor(private suService: SupervisorService) { }

  ngOnInit(): void {
    this.buscarSupervisores()
  }

  buscarSupervisores(){
    this.suService.buscarSupervisores().subscribe(res =>{
      console.log(res)
       res.forEach((sup: any[]) =>{

        let supervisorComCargo: any ={
          id_supervisor: '',
          su_nome: '',
          su_email: '',
          car_nome: '',
          car_atribuicao: ''
        }

        supervisorComCargo.id_supervisor = sup[0]
        supervisorComCargo.su_nome = sup[1]
        supervisorComCargo.su_email = sup[2]
        if(sup[4] != null){
          supervisorComCargo.car_nome = sup[4]
          supervisorComCargo.car_atribuicao = sup[5]
        }else{
          supervisorComCargo.car_nome = "-----"
          supervisorComCargo.car_atribuicao = "-----"
        }

        this.supervisores.push(supervisorComCargo)
       })
    })
  }

}
