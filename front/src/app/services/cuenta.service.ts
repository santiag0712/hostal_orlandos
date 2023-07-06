import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor() { }

  async getHabitaciones(piso: number) {
    if (piso == 0) {
      return axios.get(environment.API_ENDPOINT + '/habitaciones').
        then(res => {
          return (res.data);
        }).catch((error) => {
          return (error);
        });
    } else {
      return axios.get(environment.API_ENDPOINT + '/habitaciones/' + piso).
        then(res => {
          return (res.data);
        }).catch((error) => {
          return (error);
        });
    }
  }

  async getPisos() {
    return axios.get(environment.API_ENDPOINT + '/pisos').
      then(res => {
        return (res.data);
      }).catch((error) => {
        return (error);
      });
  }

  async getCliente(id: number) {
    return (await axios.get(environment.API_ENDPOINT + '/clientes/' + id).
      then(res => {
        return (res.data);
      }).
      catch((error) => {
        return (error);
      }));
  }

  async postCuenta(request: any) {
    console.log({ request });

    let headers = { 'Content-Type': 'application/json' };   
    let body = JSON.stringify(request);
    //console.log({ body });
    return axios.post(environment.API_ENDPOINT + '/cuentas', body, { headers }).
      then(res => {
        console.log(res.data);
        return res;
      }).catch((error) => {
        console.log(error);
      });
  }

  async getCuentas() {
    return axios.get(environment.API_ENDPOINT + '/cuentas').then(res => {
      console.log(res.data);
      
      return res.data;
    }).catch(err => {
      console.log(err);
      return err;
    })
  }

  async getDetalles (id : number) {
    return axios.get(environment.API_ENDPOINT + '/detallecuentas/'+id).then(res => {
      console.log(res.data);
      
      return res.data;
    }).catch(err => {
      console.log(err);
      return err;
    })
  }

  async filterCuenta (cadena : string) {
    return axios.get(environment.API_ENDPOINT+'/filtrocuenta/'+cadena).then(res=>{
      
      return res.data;
    }).catch(err=>{
      console.log(err);
      
    });
  }

}
