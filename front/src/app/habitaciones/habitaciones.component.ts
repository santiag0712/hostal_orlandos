import { Component, OnInit } from '@angular/core';
import { Estados, Pisos } from '../interfaces/habitacion';
import { CuentaService } from '../services/cuenta.service';
import { HabitacionService } from '../services/habitacion.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  protected pisos : Pisos[];
  protected estados : Estados [];

  protected habitaciones : any[];

  protected selected_piso =1;
  protected selected_estado = 1;

  constructor(protected cuentaService : CuentaService, protected HabitacionService : HabitacionService) { 
    this.pisos = [];
    this.estados = [];
    this.habitaciones =[];
  }

  ngOnInit(): void {
    this.getEstados();
    this.getPisos();
  
    this.mostrarHabitaciones()
  
  }

  getPisos = async () =>{
    await this.cuentaService.getPisos().
          then((res)=>{
            this.pisos= res;      
          });  
  }

  getEstados =async () =>{
    await this.HabitacionService.getEstados().then(
      (res)=>{
        this.estados = res;
      }
    )
  }

  async GuardarEstado(estado: any){
    this.selected_estado = estado;
    this.mostrarHabitaciones();
    
  }

  async GuardarPiso(piso: any){
    this.selected_piso = piso;
    this.mostrarHabitaciones();
  }

  async mostrarHabitaciones(){    
    
    await this.HabitacionService.getHabitaciones(this.selected_estado,this.selected_piso)
    .then((res)=>{
      this.habitaciones = res;      
    });   
  }
}
