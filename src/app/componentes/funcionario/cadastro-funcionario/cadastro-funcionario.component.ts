import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/FuncModel';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_cargo: string = ''
  isAlert: boolean = false
  isAlert2: boolean = false

  idFuncCadastrado: any
  funcCadastrado: boolean = false

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_email: '',
    func_telefone: '',
    func_cidade: '' ,
    func_foto: ''
  }

  foto: any
  constructor(private funcService: FuncionarioService, private route: ActivatedRoute, private router: Router, private location: Location, private http: HttpClient) {
    this.id_cargo = this.route.snapshot.paramMap.get('id_cargo')!;
   }

  ngOnInit(): void {
  }

  cadastrarFunc(){
    this.funcService.cadastrarFunc(this.funcionario, this.id_cargo).subscribe({
      complete: () =>{
        setTimeout(() =>{

          this.isAlert = true;

        }, 1000)
        this.funcService.buscarFuncPeloNome(this.funcionario.func_nome).subscribe(res =>{
          console.log(res)
          this.idFuncCadastrado = res.id_funcionario
          this.funcCadastrado = true
        })

    }, error: () => {
      alert("Erro ao cadastrar aluno")
      this.location.back()
    }
    })
  }

  subirFoto(event: any){
    if(event.target.files && event.target.files[0]){
      this.foto = event.target.files[0]
      console.log(this.foto)

      const formData = new FormData
      formData.append("foto", this.foto)

      const nome: string = this.funcionario.func_nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/envio/${this.idFuncCadastrado}?nome=${nome}`, formData).subscribe({
        next: () => console.log("foto enviada")
      })

      this.isAlert2 = true;
      this.location.back();
    }
  }

}
