import { UserService } from '../services/user.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id = 0;

  data_us : any= {USU_NOMBRE: "",  USU_APELLIDOS:"",   USU_CORREO:""};
  data_pass : any= {USU_CLAVE: '',  NUEVA_CLAVE: '', NUEVA_CLAVE_confirmation: '',};
  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];

  constructor(
    protected UserService : UserService,
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    ) { 
      this.menus = [];
    }

  ngOnInit(): void {
    this.verPerfil();

  }

  actualizarDatos = async () => {
    await this.UserService.actualizarDatos(this.id,this.data_us).then((res) => {
      alert(res);
    }).catch((err) =>{
      alert("Ha existido un error")
    });
    console.log(this.data_us);
    
  }

  actualizarPassword = async () => {
    await this.UserService.actualizarPassword(this.id,this.data_pass).then((res) => {
      alert(res);
    }).catch((err) =>{
      alert("Ha existido un error")
    });
    console.log(this.data_pass);
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
