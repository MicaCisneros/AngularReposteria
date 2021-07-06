import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comida } from './lista-comidas/Comida';

@Injectable({
  providedIn: 'root'
})
export class CarritoComidaService {

  private _listaCarrito: Comida[] = [];
  listaCarrito: BehaviorSubject <Comida[]>=new BehaviorSubject(this._listaCarrito);
  
  constructor() { }

  agregarCarrito(comida: Comida) {
    let item=this._listaCarrito.find((v1)=> v1.nombre== comida.nombre);

    if(!item){
      this._listaCarrito.push({...comida});
    }
    else{
      item.cantidad+= comida.cantidad;
    }
    
    console.log(this._listaCarrito);

    this.listaCarrito.next(this._listaCarrito);
  }

}
