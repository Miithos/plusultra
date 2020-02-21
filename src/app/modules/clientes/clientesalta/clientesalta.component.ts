import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ClientesService } from '../services/clientes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientesalta',
  templateUrl: './clientesalta.component.html',
  styleUrls: ['./clientesalta.component.css']
})
export class ClientesaltaComponent implements OnInit {

  public title: string;

  public clientesForm: FormGroup;
  private sub: any;

  public id: number;
  public clienteser: number;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cs: ClientesService,
    private router: Router
  ) { 
  }

  ngOnInit(): void {

    this.clientesForm = this.fb.group({
      id: new FormControl(0,Validators.required),
      nombre: new FormControl('',Validators.required),
      appaterno: new FormControl('', Validators.required),
      apmaterno: new FormControl('', Validators.required),
      rfc: new FormControl('',Validators.required),
    });

    this.title = 'Registro de Clientes';

    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.title = this.id ? 'Editar Cliente' : 'Nuevo Cliente';
      if (this.id) {

          this.cs.getCliente(this.id).subscribe(
            res => {
              var cliente = res;
              this.clienteser = this.id;
              this.inicializarFormulario(cliente);
            },  
            err => console.log(err) 
          )
          
      } else {
        this.cs.lastCliente().subscribe(  res => {
          this.clienteser = (res[0].id+1);
        },  
          err => console.log(err) 
        )
      }
    });

  }


  public inicializarFormulario(data) {
    this.clientesForm.setValue({
      id: this.id ? this.id : 0,
      nombre: data.nombre,
      appaterno: data.apellido_paterno,
      apmaterno : data.apellido_materno,
      rfc: data.rfc
    });
 
  }

  public guardarCliente() {
    if (this.clientesForm.valid){
      const cliente = this.clientesForm.value;
      this.cs.guardarCliente(cliente).subscribe(
        res => {
          Swal.fire(
            '',
            res['mensaje'],
            'success'
        )
        this.router.navigate(['/clientes']);
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

  public clienteConsulta() {

    if(this.id){
      this.actualizaCliente();
    } else {
      this.guardarCliente();
    }
  }

  public actualizaCliente() {
    if (this.clientesForm.valid){
      const cliente = this.clientesForm.value;
      this.cs.actualizarCliente(this.clientesForm.get('id').value,cliente).subscribe(
        res => {
          Swal.fire(
            '',
            res['mensaje'],
            'success'
        )
        this.router.navigate(['/clientes']);
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
        this.router.navigate(['/clientes']);
      }
    })
  }
  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
