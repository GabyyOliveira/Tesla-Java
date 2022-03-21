import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supervisor } from '../models/supervisorModel';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {

  Urlbase: String = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  buscarTodosSupervisores():Observable<Supervisor[]>{
    const URL = `${this.Urlbase}/supervisor`
    return this.http.get<Supervisor[]>(URL)
  }

  buscarSupervisores():Observable<any>{
    const URL = `${this.Urlbase}/supervisor-cargo`
    return this.http.get<any>(URL)
  }

  buscarUmSupervisor(id_supervisor: string):Observable<Supervisor>{
    const URL = `${this.Urlbase}/supervisor/${id_supervisor}`
    return this.http.get<Supervisor>(URL)
  }

  buscarSupervisorCargo(id_cargo: string):Observable<Supervisor>{
    const URL = `${this.Urlbase}/supevisor-cargo/${id_cargo}`
    return this.http.get<Supervisor>(URL)
  }
  buscarSupervisorPeloNome(su_nome: string):Observable<Supervisor>{
    const URL = `${this.Urlbase}/supervisor-nome/${su_nome}`
    return this.http.get<Supervisor>(URL)
  }

  cadastrarSupervisor(supervisor: Supervisor):Observable<Supervisor>{
    const URL = `${this.Urlbase}/supervisor`
    return this.http.post<Supervisor>(URL, supervisor)
  }

  supervisorSemCargo():Observable<Supervisor[]>{
    const URL = `${this.Urlbase}/supervisorSemCargo`
    return this.http.get<Supervisor[]>(URL)
  }

  editarSupervisorSemCargo(supervisor: Supervisor, id_supervisor: string):Observable<Supervisor>{
    const URL =`${this.Urlbase}/supervisorSemCargo/${id_supervisor}`
    return this.http.put<Supervisor>(URL, supervisor)
  }
  editarSupervisor(supervisor: Supervisor, id_supervisor: string, id_cargo: string):Observable<Supervisor>{
    const URL =`${this.Urlbase}/supervisorSemCargo/${id_supervisor}?cargo=${id_cargo}`
    return this.http.put<Supervisor>(URL, supervisor)
  }

  excluirSupervisor(id_supervisor: string):Observable<void>{
    const URL =`${this.Urlbase}/supervisor/${id_supervisor}`
    return this.http.delete<void>(URL)
  }
}

