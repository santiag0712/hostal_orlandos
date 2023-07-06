import { Component, OnInit } from '@angular/core';
import { Cuentas } from '../interfaces/cuenta';
import { CuentaService } from '../services/cuenta.service';
import { DataClienteService } from '../services/data-cliente.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

cuentas : any[];

  constructor( protected CuentasService: CuentaService, protected dataService : DataClienteService ) {
    this.cuentas= [];
  }

  ngOnInit(): void {
  this.mostrarCuentas();
  }
  filter = async () => { 

  }

  mostrarCuentas = async () => {
    await this.CuentasService.getCuentas().then(res => {
      this.cuentas = res;
    }).catch(err => {
      alert(err.message);
    })
  }

  ver = async (id_cuenta : number) => {
    this.dataService.id_cuenta = id_cuenta;
  }

  cobrar= async (id_cuenta : number) => {

  }

}
