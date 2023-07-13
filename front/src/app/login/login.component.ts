import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { DataClienteService } from '../services/data-cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected credentials: any = {USU_USUARIO : '',   USU_CLAVE : ''};
  
  constructor( protected SessionService : SessionService,  private router: Router){
    
  }
 
  ngOnInit(): void {
  }

  login = async () =>{
    
    this.SessionService.login(this.credentials).then((res)=>{
            
      this.SessionService.setToken(res.token);
    
      this.router.navigate(['/administracion']);
    });
    this.credentials={};
  }

}
