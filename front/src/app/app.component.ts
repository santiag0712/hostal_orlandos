import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private titulo:Title){
    titulo.setTitle("Hostal Orlando's")
  }


  ngOnInit() {
    
  }
}
