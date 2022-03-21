import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/FuncModel';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  isAlert: boolean = false
  id_cargo: any;

  funcionario: Funcionario ={
    id_funcionario: '',
    func_nome: '',
    func_email: '',
    func_telefone: '',
    func_cidade: '',
    func_foto: ''
  }
  constructor(private funcService: FuncionarioService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.funcionario.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!
   }

  ngOnInit(): void {
    this.buscarUmFunc();
  }

  buscarUmFunc(){
    this.funcService.buscarUmFunc(this.funcionario.id_funcionario).subscribe((resultado) =>{
      this.funcionario = resultado;
    })
  }

  editarFunc(){
    this.funcService.editarFunc(this.funcionario, this.funcionario.id_funcionario, this.id_cargo).subscribe({
      complete: () => {
        this.isAlert = true;
        setTimeout(() =>{

          this.location.back();

        }, 1000)
      },
      error: () =>{
        alert("Erro Brow")
        this.location.back();
      }
    })
  }

}
