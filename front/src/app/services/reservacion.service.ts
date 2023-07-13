import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';



@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  
  
  constructor(protected Session : SessionService) { }

  async getReservaciones() {
    return axios.get(environment.API_ENDPOINT + '/reservas').
      then(res => {
        return res.data;

      }).catch((error) => {
        return (error);
      });
  }

  async postReservacion(request: any[]) {

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.Session.getToken() //the token is a variable which holds the token
    };
    let body = JSON.stringify(request);
    return axios.post(environment.API_ENDPOINT + '/clientes', body, {headers}).then(res => {
      return res.data;
    }).catch((error) => {
      alert(error.response.data.mess);
      
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

  async revisarReservaciones(data_res : any[]){
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.Session.getToken() //the token is a variable which holds the token
    };
    let body = JSON.stringify(data_res);

    return axios.post(environment.API_ENDPOINT+'/validarReservaciones',body,{headers}).
    then((res)=>{
      return res.data;
    }).catch((err)=>{
      alert("No se ha podido revisar la disponibilidad")
    });
    
  }

  async reservacionHabitaciones(res: number, hab : number){
    return axios.get(environment.API_ENDPOINT+'/reservacionhabitacion/'+res+'/'+hab).
    then((res)=>{
      return res.data;
    }).catch((err)=>{
      alert("A ocurrido un error con la reservación de habitaciones");
      
    });  
  }
}
