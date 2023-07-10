import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosHeaders } from 'axios';
import { environment } from 'src/environments/environment';
import { DataClienteService } from './data-cliente.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private tokenKey = 'token'; //Clave para almacenar el token en localStorage
  
 
  constructor(private router : Router, protected datos : DataClienteService) {
   
   }

  async login(credenciales : any[]){

    let body = JSON.stringify(credenciales);
    let headers = {'Content-type': 'application/json'};
    return axios.post(environment.API_ENDPOINT+'/login',body,{headers}).
    then((res)=>{
      return(res.data);    
      
    }).catch((err)=>{
      alert(err.response.data.message);      
    });
  }

  async logout(){
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken() //the token is a variable which holds the token
    }
    return axios.get(environment.API_ENDPOINT+'/logout',{
      headers
     }
    ).then((res)=>{
      return res.data.message;
    }).catch((err)=>{
      console.log(err);
      
    });
    
  }

  async setToken(token : string){
    
    localStorage.setItem(this.tokenKey,token);
  }

  getToken() :string{
    return localStorage.getItem(this.tokenKey)!;  
  }

  async logoutToken(){
    localStorage.removeItem(this.tokenKey);
  }

  async verPerfil(){
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken() //the token is a variable which holds the token
    };
    return axios.get(environment.API_ENDPOINT+'/user-profile',{
      headers
     }
    ).then((res)=>{
      return res.data;
    }).catch((err)=>{
      console.log(err);
      
    });
  }
}
