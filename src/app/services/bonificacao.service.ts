import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bonificacao } from '../models/bonificacaoModel';

@Injectable({
  providedIn: 'root'
})
export class BonificacaoService {

  baseUrl: String = "http://localhost:8080/empresa"

  constructor(private http: HttpClient) { }

  buscarBonificacaoFuncionario(id_funcionario: string):Observable<Bonificacao[]>{
    const URL = `${this.baseUrl}/funcionario/bonificacao-funcionario/${id_funcionario}`
    return this.http.get<Bonificacao[]>(URL)
  }

  cadastrarBonificacao(bonificacao: Bonificacao, id_funcionario:string):Observable<Bonificacao>{
    const URL = `${this.baseUrl}/funcionario/adicionarBonificacao/${id_funcionario}`
    return this.http.post<Bonificacao>(URL, bonificacao)
  }

  pagarBonificacao(bonificacao: Bonificacao, codigo:string):Observable<Bonificacao>{
    const URL = `${this.baseUrl}/funcionario/pagarBonificacao/${codigo}`
    return this.http.put<Bonificacao>(URL, bonificacao)

  }
  cancelarBonificacao(bonificacao: Bonificacao, codigo:string):Observable<Bonificacao>{
    const URL = `${this.baseUrl}/funcionario/cancelarBonificacao/${codigo}`
    return this.http.put<Bonificacao>(URL, bonificacao)

  }

  editarBonificacao(bonificacao: Bonificacao, codigo:string, id_funcionario: string):Observable<Bonificacao>{
    const URL = `${this.baseUrl}/funcionario/editarBonificacao/${codigo}/${id_funcionario}`
    return this.http.put<Bonificacao>(URL, bonificacao)
  }

  excluirBonificacao(codigo: string, id_funcionario: string):Observable<Bonificacao>{
    const URL = `${this.baseUrl}/funcionario/editarBonificacao/${codigo}/${id_funcionario}`
    return this.http.delete<Bonificacao>(URL)
  }
  buscarUmaBonificacao(codigo:string):Observable<Bonificacao>{
    const URL = `${this.baseUrl}/funcionario/bonificacao/${codigo}`
    return this.http.get<Bonificacao>(URL)
  }
}
