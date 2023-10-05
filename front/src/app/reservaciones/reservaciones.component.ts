import { ReservacionService } from '../services/reservacion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { validarCedula } from '../services/validar-cedula';
import { DataClienteService } from '../services/data-cliente.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { async, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';



@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  columnas: string[] = [
    'numero',
    'cliente',
    'nombre',
    'apellidos',
    'fecha',
    'dias',
    'personas',
    'acciones'
  ];
  protected cedula = "";
  protected reservaciones: any = [];
  protected fecha: String = '';
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

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
  constructor(    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    private ServicioReservacion: ReservacionService, 
    protected modal: NgbModal,
    private dataService: DataClienteService
    ) {
        this.menus = [];
  }

  ngOnInit(): void {
    this.mostrarReservaciones();
    this.verPerfil();

  }

  mostrarconfirmadas = async ()=>{
    this.mostrarReservaciones();
  }

  mostrarTodas = async ()=>{
    await this.ServicioReservacion.getTodasReservaciones().then(resp => {
      this.reservaciones = resp;

    });
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
    if (confirm("¿Está usted seguro de eliminar la reservación?. Recuerda que debes realizar una transacción"
    +" del adelanto realizado menos la penalización por cancelacion de reservaciones")) {
      await this.ServicioReservacion.deleteReservacion(id).then(res => {
        alert("Reservación cancelada")
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
  cerrarSesion = async () => {
    this.SessionsService.logout().then((res) => {
      this.SessionsService.logoutToken();
      this.router.navigate(['/login']);
      alert(res);
    });
  }

  verPerfil = async () => {
    this.SessionsService.verPerfil().then((res) => {
      this.usuario.USU_NOMBRE = res.USU_NOMBRE;
      this.usuario.ROL_ID = res.ROL_ID;
      this.usuario.USU_APELLIDOS = res.USU_APELLIDO;
      this.menu();
    });
  }

  menu = async () => {
    this.RolService.getMenu(this.usuario.ROL_ID).then((res) => {
      this.menus = res;
    });
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
