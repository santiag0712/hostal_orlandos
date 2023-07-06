import { Component, OnInit } from '@angular/core';
import { ProductoServicesService } from '../services/producto-services.service';
import { Productos } from '../interfaces/producto';
import { CuentaService } from '../services/cuenta.service';

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

  constructor(protected ProductoServices: ProductoServicesService, protected CuentaService: CuentaService) {
    this.cadena = '';
    this.cliente = '';
    this.productos = [];
  
    this.cantidad = 0;
  }

  ngOnInit(): void {

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
}
