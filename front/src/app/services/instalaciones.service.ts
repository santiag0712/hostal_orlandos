import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  constructor( httpCliente: HttpClient) { }

  async getInstalaciones(){
    return axios.get(environment.API_ENDPOINT + '/instalacion').
    then(res=>{
      return(res.data);
    }).catch((error)=>{
      return(error);
      
    });
  }

  async showImagenes(id: number){
    return axios.get(environment.API_ENDPOINT +'/imagenes/' + id).
    then(res=>{
      return res.data
    }).catch((error)=>{
      return(error);
    });
  }


}
