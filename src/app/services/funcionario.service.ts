import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/FuncModel';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  UrlBase: string  = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  buscarFuncCargo(id_cargo: string): Observable<Funcionario[]>{
    const url = `${this.UrlBase}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url);
  }

  buscarTodosFuncs():Observable<any>{
    const url = `${this.UrlBase}/funcionario-cargo`
    return this.http.get<any>(url)
  }

  buscarFuncPeloNome(func_nome:string):Observable<Funcionario>{
    const URL = `${this.UrlBase}/funcionario-nome/${func_nome}`
    return this.http.get<Funcionario>(URL)
  }

  buscarUmFunc(id: string): Observable<Funcionario>{
    const url = `${this.UrlBase}/funcionario/${id}`
    return this.http.get<Funcionario>(url)
  }

  cadastrarFunc(funcionario: Funcionario, id_cargo:string):Observable<Funcionario>{
    const url = `${this.UrlBase}/funcionario?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url, funcionario)
  }

  editarFunc(funcionario: Funcionario, id_funcionario: string, id_cargo: string):Observable<Funcionario>{
    const url = `${this.UrlBase}/funcionario/${id_funcionario}?cargo=${id_cargo}`
    return this.http.put<Funcionario>(url, funcionario)
  }


  excluirFunc(id_funcionario: string):Observable<void>{
    const url = `${this.UrlBase}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }

}
