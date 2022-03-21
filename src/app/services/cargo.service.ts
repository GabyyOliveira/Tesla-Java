import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargoModel';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  Urlbase: String = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  mostrarCargos(): Observable<Cargo[]>{
    const URL = `${this.Urlbase}/cargo`
    return this.http.get<Cargo[]>(URL)
  }

  mostrarUmCargo(id: string):Observable<Cargo>{
    const url = `${this.Urlbase}/cargo/${id}`
    return this.http.get<Cargo>(url)

  }

  cadastrarCargo(cargo: Cargo): Observable<Cargo>{
    const url = `${this.Urlbase}/cargo`
    return this.http.post<Cargo>(url, cargo)
  }

  editarCargo(cargo: Cargo): Observable<void>{
    const url = `${this.Urlbase}/cargo/${cargo.id_cargo}`
    return this.http.put<void>(url, cargo)
  }

  excluirCargo(id: string): Observable<void>{
    const url =  `${this.Urlbase}/cargo/${id}`

    return this.http.delete<void>(url)
  }

  buscarCargoDoSupervisor(id_supervisor: string):Observable<Cargo>{
    const URL = `${this.Urlbase}/cargo/cargo-supervisor/${id_supervisor}`
    return this.http.get<Cargo>(URL)
  }
  cargoSemSupervisor():Observable<Cargo[]>{
    const URL = `${this.Urlbase}/cargoSemSupervisor`
    return this.http.get<Cargo[]>(URL)
  }

  atribuirSupervisor(cargo: Cargo, id_cargo: string, id_supervisor: string):Observable<void>{
    const URL = `${this.Urlbase}/cargo/definirSupervisor/${id_cargo}/${id_supervisor}`
    return this.http.put<void>(URL, cargo)
  }

  deixarCargoSemSupervisor(cargo: Cargo, id_cargo: string, id_supervisor: string):Observable<void>{
    const URL = `${this.Urlbase}/cargo/tirarSupervisor/${id_cargo}/${id_supervisor}`
    return this.http.put<void>(URL, cargo)
  }
}
