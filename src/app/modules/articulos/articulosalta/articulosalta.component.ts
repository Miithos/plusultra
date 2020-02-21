import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ArticulosService } from '../services/articulos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-articulosalta',
  templateUrl: './articulosalta.component.html',
  styleUrls: ['./articulosalta.component.css']
})
export class ArticulosaltaComponent implements OnInit {

  public title: string;

  public articulosForm: FormGroup;
  private sub: any;

  public id: number;

  public artserie: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private art: ArticulosService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.articulosForm = this.fb.group({
      articulo: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
      modelo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      existencia: new FormControl('',Validators.required),
    });

    this.title = 'Nuevo Articulo';

    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.title = this.id ? 'Editar Articulo' : 'Nuevo Articulo';
      if (this.id) {

          this.art.getArticulo(this.id).subscribe(
            res => {
              var articulo = res;
              this.artserie = this.id;
              this.inicializarFormulario(articulo);
            },  
            err => console.log(err) 
          )
          
      } else {
        this.art.lastArticulo().subscribe(  res => {
          this.artserie = (res[0].articulo+1);
          this.articulosForm.get('articulo').setValue(this.artserie);
        },  
        err => console.log(err) 
      )
      }
    });

  }

  public inicializarFormulario(data) {
    this.articulosForm.setValue({
      articulo: this.id ? this.id : 0,
      descripcion: data.descripcion,
      modelo: data.modelo,
      precio : data.precio,
      existencia: data.existencia
    });
 
  }

  public guardarArticulo() {
    if (this.articulosForm.valid){
      const articulo = this.articulosForm.value;
      articulo.opcion = 1;
      this.art.guardarArticulo(articulo).subscribe(
        res => {
          Swal.fire(
            '',
            res['mensaje'],
            'success'
        )
        this.router.navigate(['/articulos']);
        },
        err => console.log(err) 
      )
    } else {
      Swal.fire(
          '',
          'Faltan campos por llenar',
          'warning'
      )
    }
  }

  public articuloConsulta() {

    if(this.id){
      this.actualizarArticulo();
    } else {
      this.guardarArticulo();
    }
  }

  public actualizarArticulo() {
    if (this.articulosForm.valid){
      const articulo = this.articulosForm.value;
      articulo.opcion = 2;
      this.art.actualizarArticulo(articulo).subscribe(
        res => {
          Swal.fire(
            '',
            res['mensaje'],
            'success'
        )
        this.router.navigate(['/articulos']);
        },
        err => console.log(err) 
      )
    } else {
      Swal.fire(
          '',
          'Faltan campos por llenar',
          'warning'
      )
    }
  }

  public regresar() {

    Swal.fire({
      title: '¿Quiere regresar?',
      text: "Perdera los datos ingresados!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Devolverse!'
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/articulos']);
      }
    })
  }
  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
