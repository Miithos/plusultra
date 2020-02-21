import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  api: any;

  constructor(private http: HttpClient) {
    //this.api = 'http://localhost:3000/api';
    this.api = 'http://165.22.100.252:3000/api';
  }

  getConfiguracion() {
    return this.http.get(`${this.api}/configuracion`);
  }

  actualizarConfiguracion(data){
    return this.http.post(`${this.api}/configuracion`, data);
  }
}
