import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  
  constructor() { }

  async getRoles(){
    return axios.get(environment.API_ENDPOINT + '/roles').
    then(res=>{
      return(res.data);
    }).catch((error)=>{
      return(error);
      
    });
  }

  async getMenu(id:any){
    return axios.get(environment.API_ENDPOINT + '/menus/'+id).
    then((res)=>{
      return(res.data);
    }).catch((error)=>{

    });
  }
}
