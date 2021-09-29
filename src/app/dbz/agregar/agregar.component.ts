import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {
 
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  constructor(private dbzservice:DbzService){

  }
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(event:any){
    if(this.nuevo.nombre.trim().length==0){
      return;
    }
    this.dbzservice.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
 
    this.nuevo={
      nombre:'',
      poder:0
    }
  
  }

}
