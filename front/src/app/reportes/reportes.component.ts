import { Component, OnInit, inject } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { RolesService } from '../services/roles.service';
import { CuentaService } from '../services/cuenta.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { isEmpty, map, shareReplay } from 'rxjs/operators';
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
  protected cedula : string;

  protected depositos : Deposito []

  constructor(  protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    protected DepositoService : ReservacionService){

    this.menus=[];
    this.depositos=[];
    this.cedula ="";
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

  devolucion = async (res_id :any)=>{
    const findcliente = this.depositos.find((item) => {
      return item.RES_ID ==res_id
  });
  this.DepositoService.getUnaReservacion(findcliente?.CLI_IDENTIFI!).then((res) => {
    if(Object.entries(res).length ===0) {
      alert("La reservación ya no está activa");      
    }else{
      let date: Date = new Date();
      const anio = date.getFullYear();     
      const mes = date.getMonth()+1;     
      const day = date.getDate();  
      let devolver = 0;
      console.log({day},{mes},{anio});
      console.log(res.RES_DIA,res.RES_MES,res.RES_ANO);
      
      if(res.RES_ANO == anio){
        if(res.RES_MES == mes){
          //Si se va a cancelar en menos de 7 días la reservación
          if((res.RES_DIA-day) <= 7 ){
            devolver = findcliente?.DEP_CANTIDAD!*0.25
            alert("La reservación a cancelar tiene una fecha de menos de una semana "+
            "la devolución tendrá una penalización del 75% del valor adelantado. "+
            "El valor a devolver será: "+devolver)            
          }
          //Si se va a cancelar dentro del mismo mes de la reservación
          else{
            devolver = findcliente?.DEP_CANTIDAD!*0.5
            alert("La reservación a cancelar tiene una fecha en el mismo mes "+
            "la devolución tendrá una penalización del 50% del valor adelantado "+
            "El valor a devolver será: "+devolver)   
          }
        }
        if(mes> res.RES_MES){
          devolver = findcliente?.DEP_CANTIDAD!*0.85
          alert("La reservación a cancelar tiene una fecha lejana al día de cancelación "+
          "la devolución tendrá una penalización del 15% del valor adelantado "+
          "El valor a devolver será: "+devolver)   
        }      
      }
      
    }
    
  });
  
  
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
