import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public nome:string="Liliane Cristina"
  constructor() {}

  public NomeFuncao():void{
    alert('Funcao chamada!');
  }

  
}
