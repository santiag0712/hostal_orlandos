import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { SessionService } from './services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


  constructor(protected SessionService: SessionService,  private router: Router){}

  canActivate (
  ): boolean {
   
    const token = this.SessionService.getToken();
    
    
    if(token != null ){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
