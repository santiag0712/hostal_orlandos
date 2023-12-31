import { Component, OnInit, inject } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { RolesService } from '../services/roles.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];


  constructor(  protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService){

    this.menus=[];
  }

  ngOnInit(): void {
    this.verPerfil(); 
    this.menu();
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
