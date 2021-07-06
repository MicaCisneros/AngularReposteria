import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoComidaService } from '../carrito-comida.service';
import { Comida } from '../lista-comidas/Comida';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  listaCarrito$:Observable<Comida[]>;

  constructor(private carrito:CarritoComidaService) {
    this.listaCarrito$=carrito.listaCarrito.asObservable();
    
  }

  agregarCarrito(comida:Comida):void{
    this.carrito.agregarCarrito(comida);
  }
  
  ngOnInit(): void {
  }

}
