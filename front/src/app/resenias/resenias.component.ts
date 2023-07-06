import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReseniasService } from '../services/resenias.service';
import { Resenia } from '../interfaces/resenia';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.component.html',
  styleUrls: ['./resenias.component.css']
})
export class ReseniasComponent implements OnInit {

  protected resenias : Resenia[];

  protected resenias_data : any= {
    'RES_NOMBRE':'',
    'RES_APELLIDOS':'',
    'RES_CORREO':'',
    'RES_TEXTO':'',
  };

  constructor(protected modal: NgbModal, protected ReseniaService: ReseniasService) {
    this.resenias = [];
   }

  ngOnInit  ():void  {
    this.mostrarResenias();
  }

  mostrarResenias= async () => {
    await this.ReseniaService.getResenias().then(resp => {
      this.resenias = resp;
      console.log(this.resenias);

    }).catch(err => {
      console.log(err);
    });
  }

  openModal =async(contenido: any) => {
    this.modal.open(contenido, { scrollable: true })
  }

  guardar = async () => {
    await this.ReseniaService.insertResenia(this.resenias_data).then((resp) => {
      this.ngOnInit();
    });

    
  }
}
