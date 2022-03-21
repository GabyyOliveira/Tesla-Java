import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bonificacao } from 'src/app/models/bonificacaoModel';
import { BonificacaoService } from 'src/app/services/bonificacao.service';

@Component({
  selector: 'app-cadastro-bonificacao',
  templateUrl: './cadastro-bonificacao.component.html',
  styleUrls: ['./cadastro-bonificacao.component.css']
})
export class CadastroBonificacaoComponent implements OnInit {

  isAlert: boolean = false
  id_funcionario: any

  bonificacao: Bonificacao ={
    codigo: '',
    bo_descricao: '',
    bo_mes: '',
    bo_valor: '',
    bo_status: 'PENDENTE'
  }
  constructor(private boniService: BonificacaoService,private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.id_funcionario = this.route.snapshot.paramMap.get('id_funcionario')
  }

  cadastrarBonificacao(){
    this.boniService.cadastrarBonificacao(this.bonificacao, this.id_funcionario).subscribe({
      complete: () => {
        this.isAlert = true;
        setTimeout(() =>{

          this.location.back();

        }, 1000)},
    error: () => { alert("Erro ao cadastrar bonificação.")
                    this.location.back()},
    next: () => { console.log("Bonificação cadastrada.")}

    })
  }
}
