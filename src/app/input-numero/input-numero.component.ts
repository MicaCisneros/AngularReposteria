import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comida } from '../lista-comidas/Comida';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})
export class InputNumeroComponent implements OnInit {

  constructor() {}
  
  @Input() max! : number; 
  
  @Input()
  cantidad! : number;

  @Output()
  cantidadChange: EventEmitter<number>= new EventEmitter<number>();
  
  @Output()
  maxAlcanzado: EventEmitter<string>= new EventEmitter<string>();

  ngOnInit(): void {
  }

  upCantidad(): void{
    if(this.cantidad<this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxAlcanzado.emit("Stock alcanzado");
    }
  }

  decrementaCantidad(): void{
    if(this.cantidad>0){
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
    }
  }

  changeCantidad(event:any): void{
    console.log(event.key);
    if(event.key<=this.max){
      this.cantidad = event.key;
      this.cantidadChange.emit(this.cantidad);
    }else{
      this.cantidad = 0;
      this.cantidadChange.emit(this.cantidad);
      alert("Lo escrito en el campo excede el stock!");
    }
  }
}
