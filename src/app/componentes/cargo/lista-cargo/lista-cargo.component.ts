import { CargoService } from './../../../services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargoModel';

@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {

  id_cargo: string = ''
  id_excluir: any

  isModal: boolean = false
  cargos: Cargo[] = []

  cargo: Cargo ={
    car_nome: '',
    car_atribuicao: ''
  }

  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    this.mostrarTodosCargos();
  }

  mostrarTodosCargos(){
    this.cargoService.mostrarCargos().subscribe(res =>{
      console.log(res)
      this.cargos = res
    })
  }

  excluirCargo(){
    this.cargoService.excluirCargo(this.id_excluir).subscribe(res =>{
      // complete: () =>{
      //   alert("Cargo excluido com sucesso")
      //   // this.router.navigate(['/cargos/list'])
      // },
      // error: () =>{
      //   alert("Esse Cargo não pode ser excluído")
        // setTimeout(() =>{
        //   this.router.navigate(['/cargos/list'])
        // }, 500)
      // }
      this.mostrarTodosCargos();
      this.fecharModal();
    })
  }

  abrirModal(id: string){
    this.id_excluir = id
    this.isModal = true
  }

  fecharModal(){
    this.isModal = false
  }


}
