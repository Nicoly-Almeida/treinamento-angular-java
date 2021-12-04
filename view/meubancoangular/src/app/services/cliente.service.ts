import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}/clientes/`;
  constructor(private http: HttpClient) { }


  allClients() {
    return this.http.get<Cliente[]>(this.api)
  }

  createClients() {

  }
}