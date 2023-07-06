import { Component, OnInit } from '@angular/core';
import { ReservacionService } from '../services/reservacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { validarCedula } from '../services/validar-cedula';
import { DataClienteService } from '../services/data-cliente.service';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  protected cedula = "";
  protected reservaciones: any = [];
  protected fecha: String = '';
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  protected editing = false;

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

  constructor(private ServicioReservacion: ReservacionService, protected modal: NgbModal,
    private dataService: DataClienteService) {

  }

  ngOnInit(): void {
    this.mostrarReservaciones();

  }

  mostrarReservaciones = async () => {
    await this.ServicioReservacion.getReservaciones().then(resp => {
      this.reservaciones = resp;

    });
  }

  openModal = async (contenido: any) => {
    this.modal.open(contenido, { scrollable: true })
  }

  guardar_Editar_Res = async () => {
    var array_fecha = this.fecha.split("-");

    this.reservacion_data.RES_DIA = array_fecha[2];
    this.reservacion_data.RES_MES = array_fecha[1];
    this.reservacion_data.RES_ANO = array_fecha[0];
    console.log(this.reservacion_data);
    if (this.editing == false) {
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

    } else {

      await this.ServicioReservacion.putReservacion(this.reservacion_data);


    }

    this.modal.dismissAll();
    //window.location.reload();
  }

  editar = async (contenido: any, id: number) => {

    this.editing = true;
    this.modal.open(contenido);

    this.reservacion_data = this.reservaciones.find((reservacion: { RES_ID: number; }) => reservacion.RES_ID === id);

    console.log(this.reservacion_data);
  }

  eliminar = async (id: number) => {
    if (confirm("¿Está usted seguro de eliminar la reservación?")) {
      await this.ServicioReservacion.deleteReservacion(id).then(res => {
        alert(res);
        this.mostrarReservaciones();
      });
    }
  }

  enviarDatos = async (id: number) => {
    this.dataService.reservacion = this.reservaciones.find(
      (reservacion: { RES_ID: number; }) => reservacion.RES_ID === id
    );
  }

  buscar = async () => {
    await this.ServicioReservacion.getUnaReservacion(this.cedula).then((res)=>{
      this.reservaciones = res;
    })
  }

}
