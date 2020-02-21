import { Component, OnInit } from '@angular/core';


import { ArticulosService } from './services/articulos.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public mGridArticulo: any;

  public data: any;

  constructor(
    private art: ArticulosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.mGridArticulo = {
      selected: [],
      cols: [
        { field: 'articulo', header: 'Clave Articulo', width: '20%' },
        { field: 'descripcion', header: 'Descripcion', width: '70%' },
        { field: 'boton', header: '' }
      ],
      data: [
      ],
    };

    this.art.getArticulos().subscribe(
      res => {
        this.mGridArticulo.data = res;
      },
      err => console.log(err) 
    )

  }

  public articuloNuevo() {
    this.router.navigate(['/articulos/nuevo']);
  }

  public editararticulo(id) {
    this.router.navigate(['/articulos/editar/'+id]);
  }

}
