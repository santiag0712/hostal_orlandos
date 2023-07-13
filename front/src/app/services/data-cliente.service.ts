import { Injectable } from '@angular/core';
import { Reservaciones } from '../interfaces/reservacion';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DataClienteService {

  reservacion: Reservaciones={
    CLI_ID: 0,
    RES_DIA: 0,
    RES_MES: 0,
    RES_ANO: 0,
    RES_NDIAS: 0,
    RES_NPERSONAS: 0,
    RES_VEHICULO: 0,
    RES_OBSERVACION: '',
    RES_ESTADO: 0
  };

  instalacion :number =0;

  cuenta : any[]=[];

  id_cuenta : number =0;

  capacidadHostal = 73;

  habitaciones: any[]=[];

  constructor() {
  
   }

 
}
