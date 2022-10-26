import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public ano_atual:number = 2022;
  public nascimento:number = 0;
  public idade:number = 0;
  
  calcular(){
    this.idade = this.ano_atual - this.nascimento;
  }
}
