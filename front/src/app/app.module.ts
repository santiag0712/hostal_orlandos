import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AuthGuardGuard} from './auth-guard.guard';
//NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//componentes interfaces
import { HomeComponent } from './home/home.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { HomeadministracionComponent } from './homeadministracion/homeadministracion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutcobrosComponent } from './checkoutcobros/checkoutcobros.component';
import { ProductoComponent } from './producto/producto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InstalacionesComponent } from './instalaciones/instalaciones.component';
import { LoginComponent } from './login/login.component';
import { DetalleInstalacionComponent } from './detalle-instalacion/detalle-instalacion.component';
import { ReseniasComponent } from './resenias/resenias.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { DetalleCuentasComponent } from './detalle-cuentas/detalle-cuentas.component';
import { VenderproductoComponent } from './venderproducto/venderproducto.component';
import { ComprarproductosComponent } from './comprarproductos/comprarproductos.component';
import { SeleccionarHabitacionesComponent } from './seleccionar-habitaciones/seleccionar-habitaciones.component';
import { GuardarreservacionComponent } from './guardarreservacion/guardarreservacion.component';

//componentes menus

import { FooterComponent } from './components/footer/footer.component';
import {NavbarComponent } from './components/navbar/navbar.component';
import{SidebarComponent} from './components/sidebar/sidebar.component';

//Materaial de Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './Pipes/keys.pipe';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';




const approutes : Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'instalaciones',component: InstalacionesComponent},
  {path:'login',component: LoginComponent},
  {path:'detalle',component:DetalleInstalacionComponent}, 
  {path:'resenias',component:ReseniasComponent},
  {path:'seleccionarhabitaciones', component:SeleccionarHabitacionesComponent},
  {path:'guardarreservacion', component:GuardarreservacionComponent},
  {path:'administracion',component: AdministracionComponent,canActivate: [AuthGuardGuard]},
  {path:'checkin',component: CheckinComponent,canActivate: [AuthGuardGuard]},
  {path:'checkoutcobros',component: CheckoutcobrosComponent,canActivate: [AuthGuardGuard]},
  {path:'habitaciones',component: HabitacionesComponent,canActivate: [AuthGuardGuard]},
  {path:'perfil',component: PerfilComponent,canActivate: [AuthGuardGuard]},
  {path:'productos',component: ProductoComponent,canActivate: [AuthGuardGuard]},
  {path:'reservaciones',component: ReservacionesComponent,canActivate: [AuthGuardGuard]},
  {path:'usuarios',component: UsuariosComponent,canActivate: [AuthGuardGuard]},
  {path:'reportes',component: ReportesComponent,canActivate: [AuthGuardGuard]},
  {path:'cuentas',component: CuentasComponent,canActivate: [AuthGuardGuard]},
  {path:'detalledecuenta',component: DetalleCuentasComponent,canActivate: [AuthGuardGuard]},
  {path:'ventas', component: VenderproductoComponent,canActivate: [AuthGuardGuard]},
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministracionComponent,
    HomeadministracionComponent,
    ReportesComponent,
    UsuariosComponent,
    ReservacionesComponent,
    HabitacionesComponent,
    CheckinComponent,
    CheckoutcobrosComponent,
    ProductoComponent,
    PerfilComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    InstalacionesComponent,
    KeysPipe,
    LoginComponent,
    DetalleInstalacionComponent,
    ReseniasComponent,
    CuentasComponent,
    DetalleCuentasComponent,
    VenderproductoComponent,
    ComprarproductosComponent,
    SeleccionarHabitacionesComponent,
    GuardarreservacionComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
