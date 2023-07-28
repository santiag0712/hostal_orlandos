import { Component, OnInit } from '@angular/core';
import { DataClienteService } from '../services/data-cliente.service';
import { formatDate } from '@angular/common';
import { ReservasessionService } from '../services/reservasession.service';
import { validarCedula } from '../services/validar-cedula';
import { ReservacionService } from '../services/reservacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardarreservacion',
  templateUrl: './guardarreservacion.component.html',
  styleUrls: ['./guardarreservacion.component.css']
})
export class GuardarreservacionComponent implements OnInit {

  protected reservacion_data: any = {
    CLI_NOMBRE: '',
    CLI_APELLIDOS: '',
    CLI_NACIONALIDAD: '',
    CLI_IDENTIFI: '',
    CLI_DIRECCION: '',
    CLI_TELEFONO: '',
    CLI_CORREO: '',
    RES_DIA: 0,
    RES_MES: 0,
    RES_ANO: 0,
    RES_NDIAS: 0,
    RES_NPERSONAS: 0,
    RES_VEHICULO: 0,
    RES_OBSERVACION: ''
  };

  protected fecha: string;
  protected auto: string = 'SI';
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  protected habitaciones;
  protected total : number =0;

  constructor(protected datos: DataClienteService, protected SessionReservacion: ReservasessionService,
    protected ServicioReservacion: ReservacionService, private router: Router) {

    this.fecha = this.SessionReservacion.getFecha();
    this.reservacion_data.RES_NDIAS = parseInt(this.SessionReservacion.getDias());
    this.reservacion_data.RES_NPERSONAS = parseInt(this.SessionReservacion.getPersonas());
    this.reservacion_data.RES_VEHICULO = parseInt(this.SessionReservacion.getAuto());

    this.habitaciones = this.datos.habitaciones;

    this.total = parseInt(this.SessionReservacion.getTotal());
  }

  ngOnInit(): void {
    console.log(this.datos.habitaciones);
    if (parseInt(this.SessionReservacion.getAuto()) == 0) {
      this.auto = 'NO'
    }
  }

  buscarCliente = async ()=>{
    console.log();
    this.ServicioReservacion.getCliente(this.reservacion_data.CLI_IDENTIFI).then((res)=>{
      if(Object.entries(res).length === 0){
        alert("Sus datos no existen en nuestro registro, por favor, a continuación ingrese sus datos personales")
        
      }else{
        this.reservacion_data.CLI_NOMBRE = res.CLI_NOMBRE;
        this.reservacion_data.CLI_APELLIDOS = res.CLI_APELLIDOS;
        this.reservacion_data.CLI_NACIONALIDAD = res.CLI_NACIONALIDAD;
        this.reservacion_data.CLI_TELEFONO = res.CLI_TELEFONO;
        this.reservacion_data.CLI_CORREO = res.CLI_CORREO;
        this.reservacion_data.CLI_DIRECCION = res.CLI_DIRECCION;
        
      }
      
    })
  }

  guardar = async () => {

    if (confirm("Recuerda al aceptar la reservación deberás realizar depósito o transferencia del 50%"
                 +" de tu reservación: "+(this.total*0.5)+"$, en caso de no hacerlo se procederá a cancelar la misma"+
                 " ¿Estás seguro de continuar con este proceso?")) {
      var array_fecha = this.fecha.split("-");

      this.reservacion_data.RES_DIA = parseInt(array_fecha[2]);
      this.reservacion_data.RES_MES = parseInt(array_fecha[1]);
      this.reservacion_data.RES_ANO = parseInt(array_fecha[0]);

      console.log({ reservacion_data: this.reservacion_data });
      this.habitaciones = this.datos.habitaciones;

      if (this.reservacion_data.CLI_NACIONALIDAD == 'Ecuatoriana' || this.reservacion_data.CLI_NACIONALIDAD == 'Ecuatoriano'
        || this.reservacion_data.CLI_NACIONALIDAD == 'ecuatoriana' || this.reservacion_data.CLI_NACIONALIDAD == 'ecuatoriano' ||
        this.reservacion_data.CLI_NACIONALIDAD == 'ECUATORIANA' || this.reservacion_data.CLI_NACIONALIDAD == 'ECUATORIANO') {
        if (validarCedula(this.reservacion_data.CLI_IDENTIFI)) {
          await this.ServicioReservacion.postReservacion(this.reservacion_data).then((res) => {
            for (let i = 0; i < this.habitaciones.length; i++) {
              console.log(this.habitaciones[i]);
              
              this.ServicioReservacion.reservacionHabitaciones(res, this.habitaciones[i].id).then((res) => {
                
              });
            }
            alert("Se ha concluido con exito su reservación");
            this.router.navigate(['/home']);
          });
        } else {
          alert("El número de identificación no es valida para su nacionalidad")
        }
      } else {
        await this.ServicioReservacion.postReservacion(this.reservacion_data).then((res) => {
          console.log("Se ha concluido con exito su reservación");
        });
      }

    }


  }
  cancelar = async ()=>{
    this.SessionReservacion.logoutToken();
    this.router.navigate(['/home']);
  }
}
