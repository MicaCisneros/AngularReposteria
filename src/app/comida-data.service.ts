import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Comida } from './lista-comidas/Comida';

const URL ='https://60e4ca0b5bcbca001749ebc4.mockapi.io/Comida/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaDataService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Comida[]>{
    return this.http.get<Comida[]>(URL).pipe(
      tap((comidas: Comida[]) => comidas.forEach(comida => comida.cantidad = 0))
    );
  }

}


