import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {
  
  num: number = 1;

  ngDoCheck(): void {
    console.log('Chamou ngDoCheck');
  }

  adicionar1(){
    this.num++;
  }
}
