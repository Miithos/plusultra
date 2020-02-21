import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { ClientesaltaComponent } from './modules/clientes/clientesalta/clientesalta.component';

import { ConfiguracionComponent } from './modules/configuracion/configuracion.component';
import { ArticulosComponent } from './modules/articulos/articulos.component';
import { ArticulosaltaComponent } from './modules/articulos/articulosalta/articulosalta.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientesComponent,
    ClientesaltaComponent,
    ConfiguracionComponent,
    ArticulosComponent,
    ArticulosaltaComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule],
})
export class AppModule { }
