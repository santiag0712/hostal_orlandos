import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guardar-deposito',
  templateUrl: './guardar-deposito.component.html',
  styleUrls: ['./guardar-deposito.component.css']
})
export class GuardarDepositoComponent implements OnInit {

  protected data_deposito : any={transaccion :'',  cantidad :0.0,  res_id:0};
  constructor(private route : ActivatedRoute){

  }
  ngOnInit(): void {
    this.data_deposito['res_id'] = +this.route.snapshot.paramMap.get('reservacion')!;

    console.log(this.data_deposito['res_id']);
    
  }
  guardar = async () =>{
    console.log(this.data_deposito['transaccion']);
    console.log(this.data_deposito['cantidad']);
    
  }
}
