import { CuentaService } from '../services/cuenta.service';
import { NgModel } from '@angular/forms';
import { DataClienteService } from '../services/data-cliente.service';
import { Reservaciones, Clientes } from '../interfaces/reservacion';
import { Habitaciones } from '../interfaces/habitacion';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

  cuenta: any[];
  reservacion: Reservaciones={
    CLI_ID: 0,
    RES_DIA: 0,
    RES_MES: 0,
    RES_ANO: 0,
    RES_NDIAS: 0,
    RES_NPERSONAS: 0,
    RES_VEHICULO: 0,
    RES_OBSERVACION: '',
    RES_ESTADO: 0
  };

  habitaciones:any[];
  pisos:any[];
  cliente: Clientes={
    CLI_ID: 0,
    CLI_NOMBRE: '',
    CLI_APELLIDOS: '',
    CLI_NACIONALIDAD: '',
    CLI_IDENTIFI: '',
    CLI_DIRECCION: '',
    CLI_TELEFONO: '',
    CLI_CORREO: '',
    CLI_ESTADO: 0
  };
  request: any[] =[];

  data_check:any ={
    HAB_ID:0,    
    HAB_NOMBRE:"",    
    TIPHAB_COSTO:0,    
    RES_ID: 0,    
    CLI_ID: 0
  };

  constructor(
    private cuentaService: CuentaService, 
    protected dataCliente: DataClienteService,
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    ) {
    this.cuenta =[];
    this.pisos=[];
    this.habitaciones=[];
    this.menus = [];
   }

  ngOnInit(): void {
    this.mostrarPisos();   
    this.reservacion = this.dataCliente.reservacion;
    this.verPerfil();

    //console.table(this.reservacion.CLI_ID);

    this.mostrarCliente();   
    
  }
  agregar = async ()=>{
    this.data_check.RES_ID = this.reservacion.RES_ID;
    this.data_check.CLI_ID = this.reservacion.CLI_ID;
    //Con esto buscamos el nombre de la habitación que estamos registrando
    //para la estancia del cliente y así poder mostrarle en pantalla
    const findHabitacion   = this.habitaciones.find((item) =>{
      return item.HAB_ID == this.data_check.HAB_ID;
      
    })
    this.data_check.HAB_NOMBRE = findHabitacion.HAB_NOMBRE;
    this.data_check.TIPHAB_COSTO = findHabitacion.TIPHAB_COSTO;
    this.data_check.HAB_ID = parseInt(this.data_check.HAB_ID);
    this.request.push(this.data_check);
    this.data_check ={};
    console.log(this.request);
  }

  filter(id:number){
   console.log({id});   
   this.mostrarHabitaciones(id);
  }

  mostrarHabitaciones = async (piso:number) => {
    await this.cuentaService.getHabitaciones(piso).
          then(res=>{
            this.habitaciones= res;
            console.log(this.habitaciones);
            
          }).catch((error)=>{
            alert(error);
          });          
  }

  mostrarPisos = async ()=> {
    await this.cuentaService.getPisos().
          then(res=>{
            this.pisos= res;
            console.log(this.pisos);
            
          }).catch((error)=>{
            alert(error);
          });
  }

  mostrarCliente = async ()=> {
    this.cuentaService.getCliente(this.reservacion.CLI_ID).
    then(res=>{
      this.cliente = res;
      console.log(this.cliente);
    }).catch((error)=>{
      console.log(error);
    });
  }


  eliminar= async (index: number)=> {

    console.log(index);
    
    if (this.request.length > 0) {
      this.request.splice(index, 1);
    }else{
      this.request.shift();
    }
        
  }

  guardar= async ()=> {
    this.cuentaService.postCuenta(this.request).then(res=>{
      alert("Registro exitos.")
    }).catch(err=>{
      alert("A existido un error durante el registro.")
    });
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
