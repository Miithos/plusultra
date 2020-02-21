import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';

import { ClientesComponent } from './modules/clientes/clientes.component';
import { ClientesaltaComponent } from './modules/clientes/clientesalta/clientesalta.component';
import { ConfiguracionComponent } from './modules/configuracion/configuracion.component';

import { ArticulosComponent } from './modules/articulos/articulos.component';
import { ArticulosaltaComponent } from './modules/articulos/articulosalta/articulosalta.component';


// import {ClientesaltaComponent} from './modules/clientes/clientesalta/clientesalta.component';

const routes: Routes = [
  { 

      path: 'clientes',
      component: ClientesComponent,
      //loadChildren: './modules/clientes/clientes.module#ClientesModule',
    // children: [
    // {
    //   path: '',
    //   component: ClientesaltaComponent,
},
{ path: 'clientes/nuevo',  component: ClientesaltaComponent },
{ path: 'clientes/editar/:id',  component: ClientesaltaComponent },
{ path: 'configuracion',  component: ConfiguracionComponent },

{ path: 'articulos',  component: ArticulosComponent },
{ path: 'articulos/nuevo',  component: ArticulosaltaComponent },
{ path: 'articulos/editar/:id',  component: ArticulosaltaComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**',  redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
