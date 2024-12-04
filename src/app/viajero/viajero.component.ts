import { Viajero } from './../models/viajero';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-viajero',
  templateUrl: './viajero.component.html',
  styleUrls: ['./viajero.component.scss']
})
export class ViajeroComponent {

@Input() viajero:Viajero = new Viajero("","",'','','','');
@Input() posicion:number=0;

@Output() ezabatuBidaiaria = new EventEmitter();
@Output() aldatuBidaiaria = new EventEmitter();


ezabatu(){
  this.ezabatuBidaiaria.emit(this.posicion);
}
aldatu(){
  this.aldatuBidaiaria.emit(this.posicion);
}
}
