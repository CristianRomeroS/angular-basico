import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//tarea:
//cread modulo condadormodule
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
     AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    //se importan los modulos aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
