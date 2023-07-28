import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservacionService } from '../services/reservacion.service';

@Component({
  selector: 'app-guardar-deposito',
  templateUrl: './guardar-deposito.component.html',
  styleUrls: ['./guardar-deposito.component.css']
})
export class GuardarDepositoComponent implements OnInit {

  protected data_deposito : any={DEP_TRANSACCION :'',  DEP_CANTIDAD :0.0,  RES_ID:0};
  constructor(private route : ActivatedRoute, protected ReservacionService : ReservacionService){

  }
  ngOnInit(): void {
    this.data_deposito['RES_ID'] = +this.route.snapshot.paramMap.get('reservacion')!;

    console.log(this.data_deposito['RES_ID']);
    
  }
  guardar = async () =>{
    
    this.ReservacionService.postDepositos(this.data_deposito).then((res) =>{
      alert("Su depósito a sido registrado con éxito")
    });
    
  }
}
