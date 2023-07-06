import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import axios from 'axios';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpClient : HttpClient) { }

  //LLamado a la API para tomar todos los usuarios
   async getUsers ()  {
    return axios.get(environment.API_ENDPOINT+'/usuarios').
    then(res=>{
      return(res.data);
    }).catch((error)=>{
      return(error);
      
    }); 
  }
  //Llamado a la API para guardar un usuario
   async insertUsers  (usuario: Usuario) {
    let body = JSON.stringify(usuario);
    let headers= {'Content-Type':'application/json'};
    return await axios.post(environment.API_ENDPOINT+'/register',body,{headers}).
    then(res=>{
      console.log(res.data);
      return res;
    }).catch((error)=>{
      console.log(error);
    });
    
  }

   async editUsers (usuario:Usuario)  {

    console.log (usuario);  
    return axios.put(environment.API_ENDPOINT+'/usuarios/'+usuario.USU_ID,usuario).
    then(res=>{
      return(res.data);
    }).catch((error)=>{
      return(error);
      
    }); 
  }

  async deleteUser (USU_ID:number) { 

    console.log(USU_ID)
    return axios.delete<any>(environment.API_ENDPOINT+'/usuarios/'+USU_ID).
    then(res=>{
      return(res.data);
    }).catch((error)=>{
      return(error);
      
    });
  }

  async actualizarDatos(usu_id : number, request :any[]) {
    let body = JSON.stringify(request);
    let headers= {'Content-Type':'application/json'};

    return axios.put(environment.API_ENDPOINT+'/actualizarDatos/'+usu_id, body, {headers}).
    then((res)=>{
      return res.data;
    }).catch((error)=>{

    });
  }
  async actualizarPassword(usu_id : number, request :any[]) {
    let body = JSON.stringify(request);
    let headers= {'Content-Type':'application/json'};

    return axios.put(environment.API_ENDPOINT+'/actualizarPassword/'+usu_id, body, {headers}).
    then((res)=>{
      return res.data;
    }).catch((error)=>{

    });
  }
}
