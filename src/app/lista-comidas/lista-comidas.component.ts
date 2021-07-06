import { Component, OnInit } from '@angular/core';
import { CarritoComidaService } from '../carrito-comida.service';
import { ComidaDataService } from '../comida-data.service';
import { Comida } from './Comida';

@Component({
  selector: 'app-lista-comidas',
  templateUrl: './lista-comidas.component.html',
  styleUrls: ['./lista-comidas.component.scss']
})
export class ListaComidasComponent implements OnInit {

  comidas: Comida[]=[];

  constructor(private carrito:CarritoComidaService,
              private comidaService:ComidaDataService) {
   }

  ngOnInit(): void {
    this.comidaService.getAll().subscribe(comidas=>this.comidas=comidas);
  }

  agregarCarrito(comida:Comida):void{
    this.carrito.agregarCarrito(comida);
    comida.stock-=comida.cantidad;
    comida.cantidad=0;
  }

  maxAlcanzado(m: string){
    alert(m);
  }
}
