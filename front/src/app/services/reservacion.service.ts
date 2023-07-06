import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  
  constructor(private httpClient: HttpClient) { }

  async getReservaciones() {
    return axios.get(environment.API_ENDPOINT + '/reservas').
      then(res => {
        return res.data;

      }).catch((error) => {
        return (error);
      });
  }

  async postReservacion(request: any[]) {
    return axios.post(environment.API_ENDPOINT + '/clientes', request).then(res => {
      return res.data;
    }).catch((error) => {
      return (error);
    });
  }

  async putReservacion(request: { RES_ID: number; }) {
    return axios.put(environment.API_ENDPOINT+'/reservas/'+request.RES_ID,request).then(res=>{
      return res.data;
    }).catch((error)=>{
      return(error);
    });
  }

  async deleteReservacion(RES_ID: number) {
    return axios.delete(environment.API_ENDPOINT+'/reservas/'+RES_ID).then(res=>{
      return res.data;
    }).catch((error)=>{
      console.log(error);
      
    });

  }

  async  getUnaReservacion (cedula :string){
    return axios.get(environment.API_ENDPOINT+'/reservas/'+cedula).then(res=>{
      return res.data;
    }).catch((error)=>{
      alert("No se encontro la reservacion");
    })
  }
}
