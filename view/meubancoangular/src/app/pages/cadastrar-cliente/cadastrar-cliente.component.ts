import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  public regForm = this.formBuilder.group({
    nome: ['',  Validators.required,],
    email: ['',  Validators.required],
    cpf: ['',  Validators.required],
    obs: ['',  Validators.required],
   });
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
      
  }

  onClick(): any {
    let users = JSON.parse(localStorage.getItem("users") ?? '[]');
    if (users.length === 0) users = [];
    users.push({
      "id": users.length + 1,
      "nome": this.regForm.get("nome")?.value,
      "email": this.regForm.get("email")?.value,
      "cpf": this.regForm.get("cpf")?.value,
      "obs": this.regForm.get("obs")?.value,
      "status": "Ativo",
    })

    localStorage.setItem("users", JSON.stringify(users));

  }

  

}
