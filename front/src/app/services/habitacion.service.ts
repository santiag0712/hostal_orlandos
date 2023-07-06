import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor() { }

  async getEstados(){
    return axios.get(environment.API_ENDPOINT+'/estados').then((res) => {
      return res.data;
    }).catch((error) => {
      
    });
  }

  async getHabitaciones (estado: number, piso : number){
    if(estado != 0 && piso != 0){
      return axios.get(environment.API_ENDPOINT+'/habitaciones/'+piso+'/'+estado).then((res)=>
      {
        return res.data;
      }).catch((error) => {

      });
    }
  }
}
