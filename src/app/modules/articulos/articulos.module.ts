import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { ArticulosaltaComponent } from './articulosalta/articulosalta.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ArticulosComponent, ArticulosaltaComponent],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class ArticulosModule { }
