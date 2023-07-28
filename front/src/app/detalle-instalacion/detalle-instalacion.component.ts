import { Component, OnInit } from '@angular/core';
import { DataClienteService } from '../services/data-cliente.service';
import { InstalacionesService } from '../services/instalaciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-instalacion',
  templateUrl: './detalle-instalacion.component.html',
  styleUrls: ['./detalle-instalacion.component.css']
})

export class DetalleInstalacionComponent implements OnInit {

  id_habitacion : any ;
  carrusel : any[];
  description :string='';
  precio: number =0;
  habitacion :string = '';
  constructor(protected dataService:DataClienteService, protected servicioInstalaciones:InstalacionesService,
    private route: ActivatedRoute) {
    
    this.id_habitacion =  this.route.snapshot.paramMap.get("habitacion");
    this.carrusel=[];

   }

  ngOnInit(): void {
  
    this.imagenesCarrusel();

  }

  imagenesCarrusel = async () => {
    this.servicioInstalaciones.showImagenes(this.id_habitacion).
    then(res=>{
      this.carrusel=res;
      this.description = this.carrusel[0].INST_DESCIPCION;
      this.precio = this.carrusel[0].INST_PRECIOPERSONA;
      this.habitacion = this.carrusel[0].INST_NOMBRE;
    });
  }



}

