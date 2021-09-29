import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//tarea:
//cread modulo condadormodule
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
     AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
    //se importan los modulos aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
