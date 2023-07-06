import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReseniasService {

  constructor() { }

  async getResenias()  {
    return axios.get(environment.API_ENDPOINT+'/resenias').
    then(res=>{
      return(res.data);
    }).catch((error)=>{
      return(error);
      
    }); 
  }

 async insertResenia(request: any){
  let headers = { 'Content-Type': 'application/json' };   
  let body = JSON.stringify(request);
  return axios.post(environment.API_ENDPOINT+'/resenias',body,{headers}).
  then(res=>{
    return(res.data);
  }).catch((error)=>{
    return(error);
  })
 }

}
