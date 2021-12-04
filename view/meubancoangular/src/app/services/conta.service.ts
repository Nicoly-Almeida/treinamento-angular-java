import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conta } from '../interfaces/conta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  api = `${environment.api}/contas/`;
  constructor(private http: HttpClient) { }


  allContas() {
    return this.http.get<Conta[]>(this.api)
  }
}
