import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from './../../../models/cargoModel';
import { ActivatedRoute } from '@angular/router';
import { SupervisorService } from './../../../services/supervisor.service';
import { Supervisor } from './../../../models/supervisorModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-supervisor-cargo',
  templateUrl: './lista-supervisor-cargo.component.html',
  styleUrls: ['./lista-supervisor-cargo.component.css']
})
export class ListaSupervisorCargoComponent implements OnInit {

  nomeCargo: any
  id_excluir: any

  isModal2: boolean = false
  isModal: boolean = false
  id_funcionario!: any;

  id_cargo: any
  supervisoreSCadastrado: boolean = false
  supervisoresSemCargo: any
  supervisorSemCargo: any = []

  supervisor: Supervisor = {
    id_supervisor: '',
    su_nome: '',
    su_email: ''
  }

  cargo: Cargo = {
    id_cargo: '',
    car_nome: '',
    car_atribuicao: ''
  }
  constructor(private suService: SupervisorService, private route: ActivatedRoute, private cargoService: CargoService) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo');
    this.mostrarCargo()
    this.buscarSupervisor();
  }

  mostrarCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(res =>{
      this.cargo = res
    })
  }

  buscarSupervisor(){
    this.suService.buscarSupervisorCargo(this.id_cargo).subscribe((res)=>{
      console.log(res)
      if(res == undefined){
        alert("Não há um servico definido para este cargo")
        this.supervisoreSCadastrado = false
      }else{
        this.supervisor = res
        this.supervisoreSCadastrado = true
      }

    })
  }

  buscarSupervisorSemCargo(){
    
  }

  abrirModal(id: string){
    this.id_excluir = id
    this.isModal = true
  }

  fecharModal(){
    this.isModal = false
  }

}
