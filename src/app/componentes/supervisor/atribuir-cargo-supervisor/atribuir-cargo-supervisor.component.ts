import { CargoService } from './../../../services/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SupervisorService } from './../../../services/supervisor.service';
import { Cargo } from './../../../models/cargoModel';
import { Supervisor } from './../../../models/supervisorModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atribuir-cargo-supervisor',
  templateUrl: './atribuir-cargo-supervisor.component.html',
  styleUrls: ['./atribuir-cargo-supervisor.component.css']
})
export class AtribuirCargoSupervisorComponent implements OnInit {

  id_supervisor: any

  cargoSemSupervisor: any
  cargoSemSupervisorEscolhido: any = []
  supervisorSemCargoEscolhido: any = []

  supervisor: Supervisor ={
    id_supervisor: '',
    su_nome: '',
    su_email: ''
  }

  cargo: Cargo ={
    id_cargo: '',
    car_nome: '',
    car_atribuicao: ''
  }

  constructor(private suService: SupervisorService,
              private route: ActivatedRoute,
              private router: Router,
              private cargoService: CargoService,
              private location: Location) { }

  ngOnInit(): void {
    this.id_supervisor = this.route.snapshot.paramMap.get('id_supervisor')
    this.buscarSupervisor();
    this.buscarSupervisorCargo();
    this.buscarCargoSemSupervisor();
  }

  buscarSupervisor(){
    this.suService.buscarUmSupervisor(this.id_supervisor).subscribe(res =>{
      console.log(res)
      this.supervisor = res
    })
  }

  buscarSupervisorCargo(){
    this.cargoService.buscarCargoDoSupervisor(this.id_supervisor).subscribe(res =>{
      if(res == null){
        alert("Para esse supervisor não está definido um cargo")
      }else{
        this.cargo = res
        console.log(res)
      }
    })
  }

  buscarCargoSemSupervisor(){
    this.cargoService.cargoSemSupervisor().subscribe((res)=>{
      this.cargoSemSupervisor = res
      console.log("aqui brasil")
      console.log(res);
    })
  }

  escolherCargo(){
    console.log(this.cargoSemSupervisorEscolhido)
    this.cargo = this.cargoSemSupervisorEscolhido
  }

  atribuirCargo(){
    this.suService.buscarUmSupervisor(this.id_supervisor).subscribe((res)=>{
      this.supervisor = res
    })

    this.cargoService.atribuirSupervisor(this.cargo, this.cargo.id_cargo, this.supervisor.id_supervisor).subscribe({
      complete: () =>{
        alert("Cargo atribuido ao supervisor")
        this.location.back()

      }, error: () =>{
        alert("Erroo")
      }
    })

  }

  deixarCargoSemSupervisor(){
    this.cargoService.deixarCargoSemSupervisor(this.cargo, this.cargo.id_cargo, this.supervisor.id_supervisor).subscribe({
      complete: () =>{
        alert("Supervisor esta sem cargo")
        this.location.back()
      }, error: () =>{
        alert("Erroo")
      }
    })
  }

  editarSupervisorSemCargo(){
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


  editarSupervisorComCargo(){
    this.suService.editarSupervisor(this.supervisor, this.id_supervisor, this.cargo.id_cargo).subscribe({
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
