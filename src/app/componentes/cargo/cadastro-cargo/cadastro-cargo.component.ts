import { CargoService } from './../../../services/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargoModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  isAlert: boolean = false
  cargo: Cargo ={
    car_nome: '',
    car_atribuicao: ''
  }

  constructor(private cargoService: CargoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarCargo(){
    this.cargoService.cadastrarCargo(this.cargo).subscribe((res)=>{
      this.isAlert = true
      setTimeout(() =>{

        this.router.navigate(['/cargos/list'])

      }, 1000)
    })
  }

}
