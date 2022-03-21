import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { BonificacaoService } from 'src/app/services/bonificacao.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-bonificacao',
  templateUrl: './lista-bonificacao.component.html',
  styleUrls: ['./lista-bonificacao.component.css']
})
export class ListaBonificacaoComponent implements OnInit {

  id_funcionario: any
  nomeFuncionario: any

  bonificacoes: Bonificacao[] =[]

  bonificacao: Bonificacao ={
    codigo: '',
    bo_descricao: '',
    bo_mes: '',
    bo_valor: '',
    bo_status: ''
  }

  constructor(private boniService: BonificacaoService,private funcService: FuncionarioService, private route: ActivatedRoute, private router: Router) {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
  }

  ngOnInit(): void {
    this.mostrarBonificacaoes();
    this.buscarFunc();
  }

  mostrarBonificacaoes(){
    this.boniService.buscarBonificacaoFuncionario(this.id_funcionario).subscribe((res)=>{
      console.log("Olá")
      console.log(res)
      this.bonificacoes = res
    })
  }

  quitarBonificacao(codigo: any){
    this.boniService.buscarUmaBonificacao(codigo).subscribe(res =>{
      this.bonificacao = res

      console.log(this.bonificacao)

      this.boniService.pagarBonificacao(this.bonificacao, this.bonificacao.codigo).subscribe({
        complete: () =>{
          alert("Bonificação paga")
          this.mostrarBonificacaoes();
        },
        error: () =>{
          alert("Erroooo")
        }
      })

    })
  }

  cancelarBonificacao(codigo: any){
    this.boniService.buscarUmaBonificacao(codigo).subscribe(res =>{
      this.bonificacao = res
      console.log(this.bonificacao)

      this.boniService.cancelarBonificacao(this.bonificacao, this.bonificacao.codigo).subscribe({
        complete: () =>{
          alert("Bonificação cancelada")
          this.mostrarBonificacaoes();
        },
        error: () =>{
          alert("Errooooo")
        }
      })
    })
  }

  buscarFunc(){
    this.funcService.buscarUmFunc(this.id_funcionario).subscribe(res =>{
      console.log(res)
      this.nomeFuncionario = res.func_nome
    })
  }

}
