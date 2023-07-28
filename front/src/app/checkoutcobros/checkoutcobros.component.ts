import { Component, OnInit, inject } from '@angular/core';
import { CuentaService } from '../services/cuenta.service';
import { DataClienteService } from '../services/data-cliente.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { RolesService } from '../services/roles.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-checkoutcobros',
  templateUrl: './checkoutcobros.component.html',
  styleUrls: ['./checkoutcobros.component.css']
})
export class CheckoutcobrosComponent implements OnInit {

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
    await this.CuentasService.getCuentasCerradas().then(res => {
      this.cuentas = res;
    }).catch(err => {
      alert(err.message);
    })
  }

  ver = async (id_cuenta : number) => {
    this.dataService.id_cuenta = id_cuenta;
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
      if(this.usuario.ROL_ID != 1){
        this.router.navigate(['/administracion']);
      }
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
