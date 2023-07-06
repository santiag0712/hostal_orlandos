import { Component, OnInit } from '@angular/core';
import { DataClienteService } from '../services/data-cliente.service';
import { CuentaService } from '../services/cuenta.service';

@Component({
  selector: 'app-detalle-cuentas',
  templateUrl: './detalle-cuentas.component.html',
  styleUrls: ['./detalle-cuentas.component.css']
})
export class DetalleCuentasComponent implements OnInit {
  
  id_cuenta :number ;

  detalles : any[];

  constructor( protected dataService: DataClienteService, protected cuentaService : CuentaService){
    this.id_cuenta = this.dataService.id_cuenta;
    this.detalles =[];
  }
  
  ngOnInit(): void {
    console.log(this.id_cuenta);
    this.mostrarDetalles();
  }

  mostrarDetalles = async () => {
    this.cuentaService.getDetalles(this.id_cuenta).then(
      res => {
        this.detalles = res;
        console.log(this.detalles);
        
      }
    ).catch(err=>{
      alert("Problemas para cargar los datos")
    }
      );
  }

}
