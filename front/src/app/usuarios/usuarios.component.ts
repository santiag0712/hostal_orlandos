import { Usuario } from '../interfaces/usuario';
import { UserService } from '../services/user.service';
import { RolesService } from '../services/roles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Rol } from '../interfaces/rol';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})

export class UsuariosComponent implements OnInit {

  displayedColumns: string[] = ['index', 'nombre', 'apellido', 'correo', 'usuario', 'rol', 'acciones'];


  protected editing = false;
  protected usuarios: any[];
  protected roles: Rol[];
  protected usuario: Usuario[];
  protected dataUsuario: Usuario = {
    USU_ID: 0,
    ROL_ID: 0,
    USU_NOMBRE: '',
    USU_APELLIDO: '',
    USU_CORREO: '',
    USU_USUARIO: '',
    USU_CLAVE: '',
    USU_CLAVE_confirmation: '',
    USU_IMAGEN: '',
    USU_ESTADO: 0,
    updated_at: '',
    created_at: '',
  };
  dataSource: any;
  paginator: any;

  protected usuarioS = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];



  ngOnInit(): void {
    this.verPerfil();
        this.mostrarDatos();
    this.dataSource.paginator = this.paginator;
  }

  constructor(protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    private userService: UserService, private rolService: RolesService,
    protected modal: NgbModal) {

    this.usuarios = [];
    this.roles = [];
    this.usuario = [];
    this.menus = [];

  }
  columnas: string[] = ['numero', 'nombre', 'apellido', 'correo', 'usuario', 'rol', 'acciones'];

  filter(e:any){
    const search : string =e.target.value;
    console.log(search);
  }


   mostrarDatos = async  () => {

    await this.userService.getUsers().then(res=>{
      this.usuarios=res;
      console.log(this.usuarios);
      
    });
    
    await this.rolService.getRoles().then(res => {
      this.roles = res;
      console.log(this.roles);
    });
  }

   guardarEditar= async () => {
    if (this.editing) {

       this.userService.editUsers(this.dataUsuario).then(res => {
        this.usuario = res;
        console.log(this.usuario);
        
      this.modal.dismissAll();
      this.mostrarDatos();
        alert("Usuario actualizado con exito")
      }).catch((error) => {
        alert("Ha existido un error al momento de editar")
      });


    } else {
      
      this.userService.insertUsers(this.dataUsuario)
      .then(res => {
        
      this.modal.dismissAll();
      this.mostrarDatos();
        alert("Usuario ingresado con exito")
      }).catch((error) => {
        alert("Ha existido un error al momento de ingresar")
      });

      
    }
  }

  async editar (contenido: any, id: number)  {

    this.editing = true;
    this.modal.open(contenido);
   
    this.dataUsuario = this.usuarios.find(u => u.USU_ID == id);

    //console.log(this.dataUsuario);
  }

  async eliminar  (id: number)  {
    await this.userService.deleteUser(id).then(res => {
      alert(res);
      
      window.location.reload;

    }).catch( err =>{
      alert("El usuario no se pudo eliminar")
    });

    console.log(id);
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
      this.usuarioS.USU_NOMBRE = res.USU_NOMBRE;
      this.usuarioS.ROL_ID = res.ROL_ID;
      this.usuarioS.USU_APELLIDOS = res.USU_APELLIDO;
      if(this.usuarioS.ROL_ID != 1){
        this.router.navigate(['/administracion']);
      }
      this.menu();
    });
  }

  menu = async () => {
    this.RolService.getMenu(this.usuarioS.ROL_ID).then((res) => {
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


