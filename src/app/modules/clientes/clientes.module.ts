import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, TooltipModule, TypeaheadModule } from 'ngx-bootstrap';

import { ClientesService } from './services/clientes.service';

import { ClientesComponent } from './clientes.component';

import { ClientesaltaComponent } from './clientesalta/clientesalta.component';
import { ClientesRoutingModule } from './clientes-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientesComponent,ClientesaltaComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ClientesRoutingModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    
  ],
  providers: [ClientesService]
})
export class ClientesModule { }
