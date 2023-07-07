import { Component, OnInit,   } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { InstalacionesService } from '../services/instalaciones.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carrusel : any[];
  id_carrusel : number = 5;

  protected fecha: String = '';
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  protected data_res : any ={RES_ANO:'',  RES_MES:'',   RES_DIA:'',   RES_NDIAS:0,  RES_NPERSONAS:0,   RES_VEHICULO:0}
  constructor( private configCarousel: NgbCarouselConfig, 
    private servicioInstalaciones:InstalacionesService ) {
    
      this.carrusel=[];
   }

  ngOnInit (): void {
     this.imagenesCarrusel();
  }

  imagenesCarrusel = async () => {
    this.servicioInstalaciones.showImagenes(this.id_carrusel).
    then(res=>{
      this.carrusel=res;
      
    });
    
  }
  revisarReservaciones = async () => {
    let array = this.fecha.split('-');
    this.data_res.RES_ANO = parseInt(array[0]);
    this.data_res.RES_MES = parseInt(array[1]);
    this.data_res.RES_DIA = parseInt(array[2]);
    this.data_res.RES_VEHICULO = parseInt(this.data_res.RES_VEHICULO);
    console.log(this.data_res);
    
  }
}
