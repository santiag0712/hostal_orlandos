import { Component, OnInit } from '@angular/core';
import { InstalacionesService } from '../services/instalaciones.service';
import { ReservasessionService } from '../services/reservasession.service';
import { Router } from '@angular/router';
import { DataClienteService } from '../services/data-cliente.service';

@Component({
  selector: 'app-seleccionar-habitaciones',
  templateUrl: './seleccionar-habitaciones.component.html',
  styleUrls: ['./seleccionar-habitaciones.component.css']
})
export class SeleccionarHabitacionesComponent implements OnInit {

  habitaciones: number[];
  npersonas : number =0;
  constructor(protected SessionReserva : ReservasessionService,  private router: Router,protected datos: DataClienteService){
    this.habitaciones=[];
  }

  ngOnInit(): void {

    this.npersonas = parseInt(this.SessionReserva.getPersonas());
    console.log({npersonas: this.npersonas});
    

  }

  delay = async (n:number)=>{
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  
 agregarHabitacion = async (id: number, capa: number) =>{
    this.habitaciones.push(id);
    console.log(this.habitaciones);
    this.npersonas = this.npersonas-capa;
    if(this.npersonas > 0){
      alert("Por favor agrega otra habitación para "+this.npersonas+" restantes.");
      console.log(this.npersonas);
      
    }else{
      alert("Se ha completado las habitación, a continuación proporciona tus datos para completar la reservación")
      await this.delay(3);
      this.datos.habitaciones = this.habitaciones;
      this.router.navigate(['/guardarreservacion']);
    }
    
    
  }

}
