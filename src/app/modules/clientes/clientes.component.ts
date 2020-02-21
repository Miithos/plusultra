import { Component, OnInit } from '@angular/core';

import { ClientesService } from './services/clientes.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public mGridCliente: any;

  public data: any;

  constructor(
    private cs: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.mGridCliente = {
      selected: [],
      cols: [
        { field: 'clave', header: 'Clave Cliente', width: '20%' },
        { field: 'cliente', header: 'Nombre', width: '70%' },
        { field: 'boton', header: '' }
      ],
      data: [
      ],
    };

    console.log('que paso');
    this.cs.getClientes().subscribe(
      res => {
        this.mGridCliente.data = res;
        console.log(this.mGridCliente.data) 
      },
      err => console.log(err) 
    )

  }

  public clienteNuevo() {
    this.router.navigate(['/clientes/nuevo']);
  }

  public editarcliente(id) {
    this.router.navigate(['/clientes/editar/'+id]);
  }

}
