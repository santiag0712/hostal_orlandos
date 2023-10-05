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

  protected hab_resquest :any[];
  protected  hab_1 =0; hab_2 =0; hab_3 =0; hab_4 =0;

  protected habitaciones: any ={nombre : '', id :0};
  protected npersonas : number =0;
  protected costoTotal: number =0;
  protected noches : number =0;
  constructor(protected SessionReserva : ReservasessionService,  private router: Router,protected datos: DataClienteService){
    this.hab_resquest =[];
  }

  ngOnInit(): void {

    this.npersonas = parseInt(this.SessionReserva.getPersonas());
    this.noches = parseInt(this.SessionReserva.getDias());
    console.log({npersonas: this.npersonas});
    
    
  }

  delay = async (n:number)=>{
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  
 agregarHabitacion = async (id: number, capa: number, costo: number, nombre: string) =>{
    this.habitaciones.nombre = nombre;
    this.habitaciones.id = id;
    this.hab_resquest.push(this.habitaciones);
    console.log(this.habitaciones); 
    if(capa <= this.npersonas){
      this.costoTotal += costo*capa*this.noches;     
    }else if(capa>=this.npersonas){
      this.costoTotal += costo*this.npersonas*this.noches;  
    }   
    this.npersonas = this.npersonas-capa;
    console.log(this.costoTotal);
    if(this.npersonas > 0){
      alert("Por favor agrega otra habitación para "+this.npersonas+" restantes.");
     
      console.log(this.npersonas);
      this.habitaciones={};
    }else{
      alert("Se ha completado las habitación, a continuación proporciona tus datos para completar la reservación")
      this.SessionReserva.setCostoTotal(this.costoTotal);
      console.log(this.costoTotal);
      
      this.datos.habitaciones = this.hab_resquest;
      this.router.navigate(['/guardarreservacion']);
    }
    
    if(id == 1){
      this.hab_1++;
    }else if(id == 2){
      this.hab_2++;
    }else if(id == 3){
      this.hab_3++;
    }else if(id == 4){
      this.hab_4++;
    }
  }

}
