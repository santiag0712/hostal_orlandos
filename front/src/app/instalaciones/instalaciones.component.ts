import { Component, OnInit } from '@angular/core';
import { InstalacionesService } from '../services/instalaciones.service';
import { formatDate } from '@angular/common';
import { ReservacionService } from '../services/reservacion.service';
import { validarCedula } from '../services/validar-cedula';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataClienteService } from '../services/data-cliente.service';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  cards_data : any[];
  protected reservacion_data: any = {
    CLI_NOMBRE: '',
    CLI_APELLIDOS: '',
    CLI_NACIONALIDAD: '',
    CLI_IDENTIFI: '',
    CLI_DIRECCION: '',
    CLI_TELEFONO: '',
    CLI_CORREO: '',
    RES_DIA: '',
    RES_MES: '',
    RES_ANO: '',
    RES_NDIAS: '',
    RES_NPERSONAS: '',
    RES_VEHICULO: '',
    RES_OBSERVACION: ''

  };

  protected fecha: String = '';
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  constructor(private servicioInstalaciones:InstalacionesService, private ServicioReservacion:ReservacionService,
                        protected modal: NgbModal, protected dataService: DataClienteService) { 
    this.cards_data =[];
  }

  ngOnInit (): void {
    this.getInstalaciones();
  }

  getInstalaciones = async () =>{
    await this.servicioInstalaciones.getInstalaciones().then(res=>{
      this.cards_data=res;
      
    });
    
  }

  guardar = async () =>{
    var array_fecha = this.fecha.split("-");

    this.reservacion_data.RES_DIA = array_fecha[2];
    this.reservacion_data.RES_MES = array_fecha[1];
    this.reservacion_data.RES_ANO = array_fecha[0];
    

    if (this.reservacion_data.CLI_NACIONALIDAD == 'Ecuatoriana' || this.reservacion_data.CLI_NACIONALIDAD == 'Ecuatoriano'
        || this.reservacion_data.CLI_NACIONALIDAD == 'ecuatoriana' || this.reservacion_data.CLI_NACIONALIDAD == 'ecuatoriano' ||
        this.reservacion_data.CLI_NACIONALIDAD == 'ECUATORIANA' || this.reservacion_data.CLI_NACIONALIDAD == 'ECUATORIANO') {
        if (validarCedula(this.reservacion_data.CLI_IDENTIFI)) {
          await this.ServicioReservacion.postReservacion(this.reservacion_data);
        } else {
          alert("El número de identificación no es valida para su nacionalidad")
        }
      } else {
        await this.ServicioReservacion.postReservacion(this.reservacion_data);
      }
  }

  openModal =async(contenido: any) => {
    this.modal.open(contenido, { scrollable: true })
  }

  
  enviarDatos= async(id: number)=>{
    console.log({id});
    
    this.dataService.instalacion = id;

  }
}
