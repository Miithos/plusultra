import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  api: any;

  constructor(private http: HttpClient) {
    this.api = 'http://165.22.100.252:3000/api';
  }

  getClientes() {
    return this.http.get(`${this.api}/clientes`);
  }

  getCliente(id: number) {
    return this.http.get(`${this.api}/clientes/${id}`);
  }

  guardarCliente(data: any){
    return this.http.post(`${this.api}/clientes`, data);
  }

  eliminarCliente(id: number){
    return this.http.delete(`${this.api}/clientes/${id}`);
  }

  actualizarCliente(id: number, data: any){
    return this.http.put(`${this.api}/clientes/${id}`, data);
  }

  lastCliente(){
    return this.http.get(`${this.api}/clientes/get/last`);
  }
}
