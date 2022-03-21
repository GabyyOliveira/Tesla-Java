import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargoModel';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-editar-cargo',
  templateUrl: './editar-cargo.component.html',
  styleUrls: ['./editar-cargo.component.css']
})
export class EditarCargoComponent implements OnInit {

  isAlert: boolean = false

  cargo: Cargo={
    id_cargo: '',
    car_nome: '',
    car_atribuicao: ''
  }
  constructor(private cargoService: CargoService, private route: ActivatedRoute, private router: Router) {
    this.cargo.id_cargo = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.mostrarUmCargo();
  }

  mostrarUmCargo(){
    this.cargoService.mostrarUmCargo(this.cargo.id_cargo).subscribe((resultado)=>{
      this.cargo = resultado
    })
  }
  editarCargo(){
    this.cargoService.editarCargo(this.cargo).subscribe({
      complete: () => {
        this.isAlert = true;
        setTimeout(() =>{

         this.router.navigate(['/cargos/list'])

        }, 1000)


    },
      error: () => {
        alert("Erro ao editar")
      }
    })
  }


}
