import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasessionService {

  private diaKey = 'dia';
  private mesKey = 'mes';
  private anioKey = 'año';

  constructor() { }

  async setFecha (dia: number, mes: number, anio: number){

    sessionStorage.setItem(this.diaKey,dia.toString());
    sessionStorage.setItem(this.mesKey,mes.toString());
    sessionStorage.setItem(this.anioKey,anio.toString());
  }

  getDia():string{
    return sessionStorage.getItem(this.diaKey)!;
  }
  getMes():string{
    return sessionStorage.getItem(this.mesKey)!;
  }
  getAnio():string{
    return sessionStorage.getItem(this.anioKey)!;
  }

  async logoutToken(){
    sessionStorage.removeItem(this.diaKey);
    sessionStorage.removeItem(this.mesKey);
    sessionStorage.removeItem(this.anioKey);
  }
}
