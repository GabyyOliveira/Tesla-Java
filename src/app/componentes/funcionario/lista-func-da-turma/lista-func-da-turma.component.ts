import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-func-da-turma',
  templateUrl: './lista-func-da-turma.component.html',
  styleUrls: ['./lista-func-da-turma.component.css']
})
export class ListaFuncDaTurmaComponent implements OnInit {

  id_excluir: any
  isModal: boolean = false
  funcionarios: any = []
  constructor(private funcService: FuncionarioService) { }

  ngOnInit(): void {
    this.buscarFuncComCargo();
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
          func_telefone: '',
          func_foto: '',
          id_cargo: '',
          car_nome: '',
        }
        funcsCargo.id_funcionario = func[0]
        funcsCargo.func_nome = func[1]
        funcsCargo.func_email = func[2]
        funcsCargo.func_cidade = func[3]
        funcsCargo.func_foto = func[4]
        funcsCargo.func_telefone = func[5]
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

  excluirFunc(){
    this.funcService.excluirFunc(this.id_excluir).subscribe(res =>{
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
