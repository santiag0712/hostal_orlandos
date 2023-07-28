import { Component, OnInit, inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { RolesService } from '../services/roles.service';
import { CuentaService } from '../services/cuenta.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from '../interfaces/menu';
import { Deposito } from '../interfaces/reservacion';
import { ReservacionService } from '../services/reservacion.service';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

  protected depositos : Deposito []

  constructor(  protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    protected DepositoService : ReservacionService){

    this.menus=[];
    this.depositos=[];
  }

  ngOnInit(): void {
    this.verPerfil(); 
    this.menu();
    this.verDepositos();
  }

  verDepositos = async () =>{
    this.DepositoService.getDepositos().then((depos) =>{
      this.depositos = depos;
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

  confirmar = async (res_id :any)=>{
    this.DepositoService.confirmDeposito(res_id);
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
