import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userSelecionado: User | undefined;

  userForm: FormGroup = new FormGroup({});
  
  // responsável pela construção do formulário
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(){
    this.userForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(120)]]
    })
  }

  submitForm(){
    if(this.userForm.valid){      
      this.users.push(this.userForm.value)
      this.userForm.reset()
    }    
  }

  users: User[] = [
    {nome: 'Caio', idade: 33},
    {nome: 'João', idade: 18},
    {nome: 'Carlos', idade: 47},
    {nome: 'Ana', idade: 25}  
            
    //'Caio', 'João', 'Carlos', 'Ana'];
  ]

  // recuperando a informação passada via @Output lá do componente filho user-card
  getInfoUserSelecionado(user: User){
    this.userSelecionado = user;
  }
}
