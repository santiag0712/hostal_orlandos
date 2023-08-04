import { Component, OnInit,   } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { InstalacionesService } from '../services/instalaciones.service';
import { formatDate } from '@angular/common';
import { ReservacionService } from '../services/reservacion.service';
import { DataClienteService } from '../services/data-cliente.service';
import { ReservasessionService } from '../services/reservasession.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carrusel : any[];
  id_carrusel : number = 5;

  protected fecha: string = '';
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  protected data_res : any ={RES_ANO:'',  RES_MES:'',   RES_DIA:'',   RES_NDIAS:0,  RES_NPERSONAS:0,   RES_VEHICULO:0}
  constructor( private configCarousel: NgbCarouselConfig, 
    private servicioInstalaciones:InstalacionesService, protected ServiceResercacion : ReservacionService,
    protected datos : DataClienteService, protected SessionReserva : ReservasessionService, private router: Router ) {
    
      this.carrusel=[];
      configCarousel.showNavigationIndicators=false;
   }

  ngOnInit (): void {
     this.imagenesCarrusel();
  }

  imagenesCarrusel = async () => {
    this.servicioInstalaciones.indexImagenes().
    then(res=>{
      this.carrusel=res;
      
    });
    
  }

  delay = async (n:number)=>{
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }

  revisarReservaciones = async () => {
    let array = this.fecha.split('-');
    this.data_res.RES_ANO = parseInt(array[0]);
    this.data_res.RES_MES = parseInt(array[1]);
    this.data_res.RES_DIA = parseInt(array[2]);
    this.data_res.RES_VEHICULO = parseInt(this.data_res.RES_VEHICULO);
    alert("Danos unos segundos, estamos revisando la disponibilidad en esta fecha.")
    
    this.ServiceResercacion.revisarReservaciones(this.data_res).
    then(async (res)=>{
      console.log(res);
      
      await this.delay(5);
      if(this.datos.capacidadHostal>res){
        alert("Si hay disponibilidad el: "+this.fecha);

        this.SessionReserva.setReservacion(this.fecha,this.data_res.RES_NDIAS,this.data_res.RES_NPERSONAS,this.data_res.RES_VEHICULO)
        this.router.navigate(['/seleccionarhabitaciones']);

      }else{
        alert("Lo sentimos, No contamos con disponibilidad de habitaciones, en esta fecha: "+this.fecha);
      }      
      
    });

  }
}
