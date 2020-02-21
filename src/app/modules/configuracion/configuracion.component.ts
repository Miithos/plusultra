import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfiguracionService } from './services/configuracion.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  public configuracionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfiguracionService,
  ) { }

  ngOnInit(): void {

    this.configuracionForm = this.fb.group({
      tasa: new FormControl('',Validators.required),
      enganche: new FormControl('', Validators.required),
      plaza: new FormControl('', Validators.required)
    });

    this.inicializarFormulario();
  }

  public inicializarFormulario() {

    this.config.getConfiguracion().subscribe(
      res => {
        console.log(res);
        if(res[0] != undefined) {
          this.configuracionForm.setValue({
            tasa: res[0].tasa,
            enganche: res[0].enganche,
            plaza : res[0].plaza
          });
        }
        
      },
      err => Swal.fire(
        '',
        err,
        'error'
      )
    )
 
  }

  public actualizarConfiguracion() {
    if (this.configuracionForm.valid){
      const configuracion = this.configuracionForm.value;
      console.log(configuracion);
      this.config.actualizarConfiguracion(configuracion).subscribe(
        res => {
          Swal.fire(
            '',
            res['mensaje'],
            'success'
        )
        },
        err => Swal.fire(
          '',
          err,
          'error'
        )
      )
    } else {
      Swal.fire(
          '',
          'Faltan campos por llenar',
          'warning'
      )
    }
  }

}
