import { ProductoServicesService } from '../services/producto-services.service';
import { Productos } from '../interfaces/producto';
import { CuentaService } from '../services/cuenta.service';
import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { RolesService } from 'src/app/services/roles.service';
import { SessionService } from 'src/app/services/session.service';



@Component({
  selector: 'app-venderproducto',
  templateUrl: './venderproducto.component.html',
  styleUrls: ['./venderproducto.component.css']
})
export class VenderproductoComponent implements OnInit {

  protected cadena: string;
  protected cliente: string;

  protected cantidad : number ;

  protected productos: Productos[];
  protected data_cuenta: any = {CLI_APELLIDOS: "",    CLI_IDENTIFI: "",    CLI_NOMBRE: "",    CUENT_ID: 0,    HAB_NOMBRE: ""};

  protected data_detalle: any ={CUENT_ID: 0,  PROD_ID: 0, PROD_CANTIDAD:0,  TOTAL: 0};

  protected request: any[] =[];

  protected usuario = { ROL_ID: 0, USU_NOMBRE: '', USU_APELLIDOS: '' };
  protected menus: Menu[];
  displayedColumns: string[] = ['index', 'nombre', 'precio', 'cantidad', 'agregar'];

  constructor(
    protected ProductoServices: ProductoServicesService, 
    protected CuentaService: CuentaService,
    protected SessionsService: SessionService,
    private router: Router,
    protected RolService: RolesService,
    ) {
    this.cadena = '';
    this.cliente = '';
    this.productos = [];
    this.menus = [];  
    this.cantidad = 0;
  }

  ngOnInit(): void {
    this.verPerfil();
    
  }

  filtroClientes = async () => {
    this.CuentaService.filterCuenta(this.cliente).then((res) => {
      this.data_cuenta = res;
      console.log(this.data_cuenta);
    });
  }


  filtro = async () => {
    this.ProductoServices.filtroProducto(this.cadena).then((res) => {
      this.productos = res;
      console.log(this.productos);
    })
  }

  carrito = async (id_prod: any) => {
    const findproducto = this.productos.find((item) => {
        return item.PROD_ID === id_prod
    });
      
    this.data_detalle.CUENT_ID = this.data_cuenta.CUENT_ID;
    this.data_detalle.PROD_ID = findproducto?.PROD_ID;
    this.data_detalle.PROD_CANTIDAD = this.cantidad;
    this.data_detalle.TOTAL =findproducto?.PROD_PRECIO;
    this.data_detalle.TOTAL = parseFloat((this.data_detalle.TOTAL*this.cantidad).toFixed(2));

    this.request.push(this.data_detalle);

    this.data_detalle ={};

    console.log(this.request);
    
  }

  vender = async() => {
    this.ProductoServices.venderProducto(this.request).then((res) => {
      alert(res);
    }).catch((err) => {
      alert("Ocurrio un error");
    });
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
      if(this.usuario.ROL_ID != 2){
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
