import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Productos } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicesService {

  constructor() { }

  async getProductos(){
    return axios.get(environment.API_ENDPOINT+'/productos').then(resp =>{
      return resp.data;           

    }).catch(err =>{
      return(err);
    });
  } 

  async postProductos(producto : Productos){
    let headers = { 'Content-Type': 'application/json' };   
    let body = JSON.stringify(producto);
    console.log(body);
    
    return axios.post(environment.API_ENDPOINT+'/productos',body, {headers}).
    then(res=>{
      console.log(res);
      
    }).catch(err=>{
      console.log(err);
    
    });
  }

  async editUsers(producto : Productos){
    let headers = { 'Content-Type': 'application/json' };   
    let body = JSON.stringify(producto);
    console.log(body);
    
    return axios.put(environment.API_ENDPOINT+'/productos/'+producto.PROD_ID,body, {headers}).
    then(res=>{
      console.log(res);
      
    }).catch(err=>{
      console.log(err);
    
    });
  }

  async deleteUser(id : any){

    return axios.delete(environment.API_ENDPOINT+'/productos/'+id).
    then(res=>{
      return res.data;
      
    }).catch(err=>{
      console.log(err);
    
    });

  }

  async comprarProducto(producto: Productos){
    let headers = { 'Content-Type': 'application/json' };   
    let body = JSON.stringify(producto);
    return axios.post(environment.API_ENDPOINT+'/comprarproducto/',body,{headers}).
    then(res=>{
      return res.data;
    }).catch(err=>{
      console.log(err);    
    });

  }
  
  async filtroProducto(cadena : string){
    return axios.get(environment.API_ENDPOINT+'/filtroproducto/'+cadena).then(res=>{
      return res.data;
    }).catch(err=>{
      console.log(err);
      
    });
  }

  async venderProducto (productos: any){
    let headers = { 'Content-Type': 'application/json' };   
    let body = JSON.stringify(productos);
    return axios.post(environment.API_ENDPOINT+'/detalleproductos',body,{headers}).then(res=>{
      return res.data;
    }).catch(err=>{
      return(err);
      
    });
  }
}
