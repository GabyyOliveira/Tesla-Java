import { SupervisorService } from './../../services/supervisor.service';
import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  qtnFuncionarios: any
  qtdCargos: any
  qtdSupervisores: any
  qtdsupervisorSemCargo: any


  funcionarios: any = []
  supervisores: any =[]
  constructor(private funcService: FuncionarioService,private cargoService:CargoService, private suService: SupervisorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.buscarFunc();
    this.buscarCargo();
    this.buscarFuncComCargo();
    this.buscarSupervisores()
    this.buscarTodosSupervisores()
    this.supervisorSemCargo()

  }

  buscarFunc(){
    this.funcService.buscarTodosFuncs().subscribe(resultado =>{
      console.log(resultado)
      this.qtnFuncionarios = resultado.length
      console.log(this.qtnFuncionarios)
    })
  }

  buscarCargo(){
    this.cargoService.mostrarCargos().subscribe(resultado =>{
      this.qtdCargos = resultado.length
    })
  }

  buscarTodosSupervisores(){
    this.suService.buscarTodosSupervisores().subscribe(res =>{
      console.log(res)
      this.qtdSupervisores = res.length
    })
  }

  supervisorSemCargo(){
    this.suService.supervisorSemCargo().subscribe(res =>{
      console.log(res)
      this.qtdsupervisorSemCargo = res.length
    })
  }

  buscarFuncComCargo(){
    this.funcService.buscarTodosFuncs().subscribe(res =>{
      console.log(res)
      res.forEach((func: any[]) => {
        let funcsCargo: any ={
          id_funcionario: '',
          func_nome: '',
          func_cidade: '',
          func_email: '',
          func_foto: '',
          id_cargo: '',
          car_nome: '',
        }
        funcsCargo.id_funcionario = func[0]
        funcsCargo.func_nome = func[1]
        funcsCargo.func_email = func[2]
        funcsCargo.func_cidade = func[3]
        funcsCargo.func_foto = func[4]
        if(func[6] != null){
          funcsCargo.car_nome = func[6]
        }
        else{
          funcsCargo.car_nome = "----"
        }

        this.funcionarios.push(funcsCargo)


      });
    })
  }
  // cargoComOServico(){
  //   this.servService.buscarCargoComServico().subscribe(res =>{
  //     console.log(res)
  //     this.cargoComServico = res.length
  //   })
  // }
  // cargoSemFunc(){
  //   this.servService.buscarCargoSemServico().subscribe(resultado =>{
  //     console.log(resultado)
  //     this.cargoSemServico = resultado.length
  //     console.log(this.cargoSemServico)
  //   })
  // }

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
