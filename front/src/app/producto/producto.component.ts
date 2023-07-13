import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Acciones, Productos } from "../interfaces/producto";
import { ProductoServicesService } from '../services/producto-services.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  protected producto: any = {
    PROD_ID: 0,
    PROD_NOMBRE: '',
    PROD_PRECIO: 0.0,
    PROD_CANTIDAD: 0,
    PROD_ESTADO: 0,
  };

  protected acciones : Acciones [];

  protected productos: Productos[];

  protected editing: boolean = false;

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];


  constructor(
    protected modal: NgbModal, 
    protected ProductoService: ProductoServicesService,
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    ) {
    this.productos = [];
    this.menus = [];
    this.acciones=[];
  }

  ngOnInit(): void {
    this.mostrarProducto();
    this.verPerfil();

  }

  mostrarProducto = async () => {
    await this.ProductoService.getProductos().then((resp) => {

      this.productos = resp;
    }).catch((err) => {
      alert("Error a cargar los productos")
    });
  }

  guardar_Editar_Prod = async () => {

    if (this.editing) {

      this.ProductoService.editUsers(this.producto).then(res => {
        this.mostrarProducto();
        console.log(res);
        this.modal.dismissAll();
        //window.location.reload;
        alert("Producto actualizado con exito")
      }).catch((error) => {
        alert("Ha existido un error al momento de editar")
      });


    } else {

      console.log(this.producto);
      await this.ProductoService.postProductos(this.producto).then(res => {

        this.modal.dismissAll();
        this.mostrarProducto();
        //window.location.reload();
        alert("Nuevo producto registrado")
      });
    }
  }
 
  async comprarProducto(){
    await this.ProductoService.comprarProducto(this.producto).then(res => {
      this.modal.dismissAll();
      this.mostrarProducto();
      
    })
    this.producto.PROD_ID = parseInt( this.producto.PROD_ID);
    console.log(this.producto);
    
  }
  async openComprar(contenido: any) {
    this.modal.open(contenido);
    console.log(this.producto);
  }

  async editar(contenido: any, id: any) {

    this.editing = true;
    this.modal.open(contenido);

    this.producto = this.productos.find(u => u.PROD_ID == id);

    console.log(this.producto);
  }

  async eliminar(id: any) {
    if (confirm("¿Estás seguro de eliminar el producto?")) {
      await this.ProductoService.deleteUser(id).then(res => {
        alert(res);
        this.mostrarProducto();

      }).catch(err => {
        alert("El producto no se pudo eliminar")
      });
    }

  }

  openModal = async (contenido: any) => {
    this.editing = false;
    this.producto ={};
    this.modal.open(contenido, { scrollable: true })
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
