import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import {ClientesaltaComponent} from './clientesalta/clientesalta.component';


const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
    children: [
      { path: 'nuevo', data: { title: 'Nuevo' }, component: ClientesaltaComponent },
      { path: 'editar/:id', data: { title: 'Editar' }, component: ClientesaltaComponent },
    ],
  },
];

export const ClientesRoutingModule = RouterModule.forChild(routes);
