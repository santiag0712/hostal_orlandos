import { Estados, Pisos } from '../interfaces/habitacion';
import { CuentaService } from '../services/cuenta.service';
import { HabitacionService } from '../services/habitacion.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {



  protected pisos : Pisos[];
  protected estados : Estados [];

  protected habitaciones : any[];

  protected selected_piso =1;
  protected selected_estado = 1;

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

  constructor(    
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    protected cuentaService : CuentaService, 
    protected HabitacionService : HabitacionService) { 
    this.pisos = [];
    this.estados = [];
    this.habitaciones =[];
    this.menus = [];
  }

  ngOnInit(): void {
    this.getEstados();
    this.getPisos();
    this.verPerfil();
    this.mostrarHabitaciones()
  
  }

  getPisos = async () =>{
    await this.cuentaService.getPisos().
          then((res)=>{
            this.pisos= res;      
          });  
  }

  getEstados =async () =>{
    await this.HabitacionService.getEstados().then(
      (res)=>{
        this.estados = res;
      }
    )
  }

  async GuardarEstado(estado: any){
    this.selected_estado = estado;
    this.mostrarHabitaciones();
    
  }

  async GuardarPiso(piso: any){
    this.selected_piso = piso;
    this.mostrarHabitaciones();
  }

  async mostrarHabitaciones(){    
    
    await this.HabitacionService.getHabitaciones(this.selected_estado,this.selected_piso)
    .then((res)=>{
      this.habitaciones = res;      
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
