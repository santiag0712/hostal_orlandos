import { DataClienteService } from '../services/data-cliente.service';
import { CuentaService } from '../services/cuenta.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-detalle-cuentas',
  templateUrl: './detalle-cuentas.component.html',
  styleUrls: ['./detalle-cuentas.component.css']
})
export class DetalleCuentasComponent implements OnInit {
  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

  id_cuenta :number ;

  detalles : any[];

  constructor( 
    protected dataService: DataClienteService, 
    protected cuentaService : CuentaService,
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    ){
    this.id_cuenta = this.dataService.id_cuenta;
    this.detalles =[];
    this.menus = [];
  }
  
  ngOnInit(): void {
    console.log(this.id_cuenta);
    this.mostrarDetalles();
    this.verPerfil();

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
