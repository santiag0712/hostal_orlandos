import { Component, OnInit,   } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { InstalacionesService } from '../services/instalaciones.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carrusel : any[];
  id_carrusel : number = 5;
  latitude = 51.678418;
  longitude = 7.809007;
  zoom = 12;

  constructor( private configCarousel: NgbCarouselConfig, 
    private servicioInstalaciones:InstalacionesService ) {
    
      this.carrusel=[];
   }

  ngOnInit (): void {
     this.imagenesCarrusel();
  }

  imagenesCarrusel = async () => {
    this.servicioInstalaciones.showImagenes(this.id_carrusel).
    then(res=>{
      this.carrusel=res;
      
    });
    
  }
}
