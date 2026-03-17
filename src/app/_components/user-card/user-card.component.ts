import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() user: User = {nome: '', idade: 0};

  @Output() userInfoEmitter = new EventEmitter<User>();

  retornarDadosComOutput(){
      // emitindo para o componente pai os dados que estão no componente filho
      this.userInfoEmitter.emit(this.user);     // Lembrando que o input user  (this.user aqui) traz os dados do componente pai para o filho
  }
}
