import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/FuncModel';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrls: ['./lista-funcionario.component.css']
})
export class ListaFuncionarioComponent implements OnInit {

  nomeCargo: any
  id_excluir: any

  isModal2: boolean = false
  isModal: boolean = false
  id_funcionario!: any;

  id_cargo: string = ''
  funcionarios: Funcionario[] = []

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_email: '',
    func_telefone: '',
    func_cidade: '' ,
    func_foto: ''
  }
  constructor(private funcService: FuncionarioService, private route: ActivatedRoute, private router: Router, private cargoService: CargoService) { }

  ngOnInit(): void {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!;
    this.buscarFuncCargo();
    this.buscaCargo();
  }

  buscarFuncCargo(){
    this.funcService.buscarFuncCargo(this.id_cargo).subscribe((resultado) =>{
      this.funcionarios = resultado;
      console.log(resultado[0].func_foto);
    })
  }

  buscaCargo(){
    this.cargoService.mostrarUmCargo(this.id_cargo).subscribe(resultado =>{
      this.nomeCargo = resultado.car_nome
    })
  }

  excluirFunc(){

    this.funcService.excluirFunc(this.id_excluir).subscribe(res =>{
      this.buscarFuncCargo();
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
