import { Component, Input } from '@angular/core';
import { Viajero } from '../models/viajero';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  public viajeros: Array<Viajero>;
  public ezkutatu=false;
  public posicion=0;
  public izena='';
  public abizena='';
  public dni='';
  public fechaI='';
  public fechaS='';
  public habitacion='';
  constructor(){
    this.viajeros = [
      new Viajero("Laura","Masna",'123456789','10/10/2024','20/10/2024','112'),
      new Viajero("Mikel","Izar",'789489156','20/01/2024','20/01/2024','210'),
      new Viajero("Alberto","Rodriguez",'415156156','13/11/2024','18/11/2024','203'),
      new Viajero("Ainhoa","Esnaola",'456456456','05/05/2024','20/10/2024','103'),
      new Viajero("Begoña","Urrutia",'789789789','11/06/2024','20/06/2024','110'),

    ];
  }



  erakutsiFormularioa(){
    this.ezkutatu=true;
    this.posicion=-1;
    this.izena='';
    this.abizena='';
    this.dni='';
    this.fechaI='';
    this.fechaS='';
    this.habitacion='';
  }

  atzera(){
    this.ezkutatu=false;
  }

  bidaiariaEzabatu(event:any){
    this.posicion=parseInt(event);
    this.viajeros.splice(this.posicion,1);
  }
  aldatuBidaiaria(event:any){
    this.posicion=parseInt(event);
    this.ezkutatu=true;
    this.izena=this.viajeros[this.posicion].nombre;
    this.abizena=this.viajeros[this.posicion].apellido;
    this.dni=this.viajeros[this.posicion].dni;
    this.fechaI=this.viajeros[this.posicion].fechaIngreso;
    this.fechaS=this.viajeros[this.posicion].fechaSalida;
    this.habitacion=this.viajeros[this.posicion].habitacion;
  }
  aldaketakGorde(){
    if(this.posicion!=-1){
    this.viajeros[this.posicion] = new Viajero(this.izena, this.abizena, this.dni, this.fechaI, this.fechaS, this.habitacion);
    }else{
      this.viajeros.push(new Viajero(this.izena, this.abizena, this.dni, this.fechaI, this.fechaS, this.habitacion));
    }
    this.ezkutatu=false;

  }
  insertarDatos(){
    this.izena='';
    this.abizena='';
    this.dni=this.viajeros[this.posicion].dni;
    this.fechaI=this.viajeros[this.posicion].fechaIngreso;
    this.fechaS=this.viajeros[this.posicion].fechaSalida;
    this.habitacion=this.viajeros[this.posicion].habitacion;
  }
}
