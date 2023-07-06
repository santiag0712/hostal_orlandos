import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id = 0;

  data_us : any= {USU_NOMBRE: "",  USU_APELLIDOS:"",   USU_CORREO:""};
  data_pass : any= {USU_CLAVE: '',  NUEVA_CLAVE: '', NUEVA_CLAVE_confirmation: '',};

  constructor(protected UserService : UserService) { }

  ngOnInit(): void {
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

}
