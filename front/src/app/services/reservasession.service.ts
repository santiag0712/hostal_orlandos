import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservasessionService {

  private fechaKey = 'fecha';
  private diasKey = 'dias';
  private personasKey= 'personas';
  private autoKey = 'autos';
  private totalKey = 'total';
  constructor() { }

  async setReservacion (fecha: string, dias: number, personas: number, auto: number){

    sessionStorage.setItem(this.fechaKey,fecha);
    sessionStorage.setItem(this.diasKey,dias.toString());
    sessionStorage.setItem(this.personasKey,personas.toString());
    sessionStorage.setItem(this.autoKey,auto.toString());
  }

  async setCostoTotal (costo: number){
    sessionStorage.setItem(this.totalKey,costo.toString());
  }
  getTotal():string{
    return sessionStorage.getItem(this.totalKey)!;
  }
  getFecha():string{
    return sessionStorage.getItem(this.fechaKey)!;
  }
  getDias():string{
    return sessionStorage.getItem(this.diasKey)!;
  }
  getPersonas():string{
    return sessionStorage.getItem(this.personasKey)!;
  }

  getAuto():string{
    return sessionStorage.getItem(this.autoKey)!;
  }

  async logoutToken(){
    sessionStorage.removeItem(this.fechaKey);
    sessionStorage.removeItem(this.diasKey);
    sessionStorage.removeItem(this.personasKey);
    sessionStorage.removeItem(this.autoKey);
    sessionStorage.removeItem(this.totalKey);
  }
}
