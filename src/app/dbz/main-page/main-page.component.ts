import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})

export class MainPageComponent{
  
  // cambiarNombre(event:any){
  //   console.log(event.target.value);
  // }
  nuevo:Personaje={
    nombre:'Maestro roshi',
    poder:1000
  }
  
  constructor(private dbzService:DbzService){
  }
}
