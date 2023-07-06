import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataClienteService } from 'src/app/services/data-cliente.service';
import { InstalacionesService } from 'src/app/services/instalaciones.service';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { validarCedula } from 'src/app/services/validar-cedula';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private ServicioReservacion:ReservacionService,
    protected modal: NgbModal, protected dataService: DataClienteService) { }

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
  ngOnInit(): void {
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
          await this.ServicioReservacion.postReservacion(this.reservacion_data).then((res) => {
            this.modal.dismissAll();
          });
        } else {
          alert("El número de identificación no es valida para su nacionalidad")
        }
      } else {
        await this.ServicioReservacion.postReservacion(this.reservacion_data).then((res) => {
          this.modal.dismissAll();
        });;
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
