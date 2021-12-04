import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];


  constructor(private clienteService: ClienteService) { }


  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes() {
    this.clienteService.allClients().subscribe(clientesApi => {
      this.clientes = clientesApi;
    });
  }

}
