import { Cuentas } from '../interfaces/cuenta';
import { CuentaService } from '../services/cuenta.service';
import { DataClienteService } from '../services/data-cliente.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

cuentas : any[];
displayedColumns: string[] = ['index', 'nombre', 'apellido', 'identificacion', 'total', 'acciones'];

  constructor( 
    protected CuentasService: CuentaService, 
    protected dataService : DataClienteService, 
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    ) {
    this.cuentas= [];
    this.menus = [];
  }

  ngOnInit(): void {
  this.mostrarCuentas();
  this.verPerfil();

  }
  filter = async () => { 

  }

  mostrarCuentas = async () => {
    await this.CuentasService.getCuentas().then(res => {
      this.cuentas = res;
    }).catch(err => {
      alert(err.message);
    })
  }

  ver = async (id_cuenta : number) => {
    this.dataService.id_cuenta = id_cuenta;
  }

  cobrar= async (id_cuenta : number) => {

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
