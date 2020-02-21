import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticulosComponent } from './articulos.component';
import { ArticulosaltaComponent } from './articulosalta/articulosalta.component';


const routes: Routes = [
  {
    path: '',
    component: ArticulosComponent,
    children: [
      { path: 'nuevo', data: { title: 'Nuevo' }, component: ArticulosaltaComponent },
      { path: 'editar/:id', data: { title: 'Editar' }, component: ArticulosaltaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosRoutingModule { }
