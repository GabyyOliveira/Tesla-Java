import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { BonificacaoService } from 'src/app/services/bonificacao.service';

@Component({
  selector: 'app-editar-bonificacao',
  templateUrl: './editar-bonificacao.component.html',
  styleUrls: ['./editar-bonificacao.component.css']
})
export class EditarBonificacaoComponent implements OnInit {

  codigo: any
  id_funcionario: any

  isAlert: boolean = false

  bonificacao: Bonificacao ={
    codigo: '',
    bo_descricao: '',
    bo_mes: '',
    bo_valor: '',
    bo_status: ''
  }

  constructor(private boService: BonificacaoService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.paramMap.get('codigo')
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
    this.buscarBonificacao();
  }

  buscarBonificacao(){
    this.boService.buscarUmaBonificacao(this.codigo).subscribe(resultado =>{
      this.bonificacao = resultado
      console.log(resultado.bo_mes)
      this.bonificacao.bo_mes = resultado.bo_mes.slice(0,10)

    })
  }

  editarBonificacao(){
    this.boService.editarBonificacao(this.bonificacao, this.codigo, this.id_funcionario).subscribe({
      complete: () => {
        this.isAlert = true;
        setTimeout(() =>{

          this.location.back();

        }, 1000)
      },
    error: () =>{
      alert("Erro")
      this.location.back()
    }
    })
  }

}
