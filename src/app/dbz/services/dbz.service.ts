import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{

   private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 14000
        },
        {
          nombre: 'Vegeta',
          poder: 4600
        },
        {
          nombre: 'Krillin',
          poder: 2400
        }
      ]
      get personajes():Personaje[]{
          return[...this._personajes];
      }
    constructor(){}

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);

    }

}