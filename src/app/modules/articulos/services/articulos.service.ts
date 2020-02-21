import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  api: any;

  constructor(private http: HttpClient) {
    this.api = 'http://165.22.100.252:3000/api';
  }

  getArticulos() {
    return this.http.get(`${this.api}/articulos`);
  }

  getArticulo(id: number) {
    return this.http.get(`${this.api}/articulos/${id}`);
  }

  guardarArticulo(data: any){
    return this.http.post(`${this.api}/articulos`, data);
  }

  actualizarArticulo(data: any){
    return this.http.put(`${this.api}/articulos`, data);
  }

  lastArticulo(){
    return this.http.get(`${this.api}/articulos/get/last`);
  }
}
