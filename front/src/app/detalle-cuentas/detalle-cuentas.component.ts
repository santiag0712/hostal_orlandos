import { DataClienteService } from '../services/data-cliente.service';
import { CuentaService } from '../services/cuenta.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';
import { Cliente } from '../interfaces/cuenta';
import { formatDate } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Deposito } from '../interfaces/reservacion';

@Component({
  selector: 'app-detalle-cuentas',
  templateUrl: './detalle-cuentas.component.html',
  styleUrls: ['./detalle-cuentas.component.css']
})
export class DetalleCuentasComponent implements OnInit {
  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];
  protected datos_cuenta : Cliente[];
  id_cuenta :any ;
  total_cuenta :any;
  protected today = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  detalles : any[];
  protected cantidad =0;
  protected total_pagar =0;
  constructor( 
    protected dataService: DataClienteService, 
    protected cuentaService : CuentaService,
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    private route: ActivatedRoute
    ){
    this.id_cuenta = this.route.snapshot.paramMap.get("cuenta");
    
    this.detalles =[];
    this.menus = [];
    this.datos_cuenta =[];
    
  }
  
  ngOnInit(): void {
    this.verPerfil();
    this.mostrarCliente();
    this.mostrarDetalles();
    this.mostrarDeposito();
    this.total_cuenta = this.route.snapshot.paramMap.get("total");
  }



  mostrarCliente = async () =>{
    this.cuentaService.getClienteCuenta(this.id_cuenta).then((res)=>{
      this.datos_cuenta = res;
    });  
  }

  mostrarDetalles = async () => {
    this.cuentaService.getDetalles(this.id_cuenta).then(
      res => {
        this.detalles = res;
        
      }
    ).catch(err=>{
      alert("Problemas para cargar los datos")
    }
      );
  }

  mostrarDeposito = async ()=>{
    this.cuentaService.getDeposito(this.id_cuenta).then((res)=>{
      this.cantidad = res.DEP_CANTIDAD;
      this.total_pagar = this.total_cuenta-this.cantidad;
    })
      
  }

  cobrar = async () => {
    this.cuentaService.cobrarCuenta(this.id_cuenta);
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
