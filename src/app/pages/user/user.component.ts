import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  myUsername: string | null = '';

  // injetou a dependência para usar o recurso da rota.
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    // recebendo parametro por rota
    //this.route.paramMap.subscribe( (params) => {
    //    this.myUsername = params.get('username');  // esse username do get   vem do mesmo nome do que vem na rota
    //})

    // recebendo parametro por queryParams
    this.getNome();
  }    
  
  getNome(){
    // aqui ele recebe o parâmetro por queryParams. Ele pega o valor pela chave dentro do objeto passado de onde está vindo esse parametro.
    this.route.queryParams.subscribe( (params) => {
        this.myUsername = params['username'];  // esse username do get   vem do mesmo nome do que vem na rota
    })
  }
}
