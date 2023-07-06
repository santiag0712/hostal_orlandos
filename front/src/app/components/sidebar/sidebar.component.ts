import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 

  protected usuario = {ROL_ID:0, USU_NOMBRE:'',  USU_APELLIDOS:''};

  protected menus: Menu[];

  constructor(protected SessionsService: SessionService, private router: Router, protected RolService: RolesService) {
    this.menus = [];
   }

  ngOnInit(): void {  
    this.verPerfil();  
    
  }

  cerrarSesion = async () => {
    this.SessionsService.logout().then((res)=>{
      this.SessionsService.logoutToken();
      this.router.navigate(['/login']);
      alert(res);
    });
    


  }

  verPerfil = async () => {    
    this.SessionsService.verPerfil().then((res) => {
      this.usuario.USU_NOMBRE =res.USU_NOMBRE;
      this.usuario.ROL_ID =res.ROL_ID;
      this.usuario.USU_APELLIDOS =res.USU_APELLIDO;
      
      this.menu();
    });
  }

  menu = async () => {
    
    this.RolService.getMenu(this.usuario.ROL_ID).then((res) => {
      this.menus = res;
      
    })
  }
}
