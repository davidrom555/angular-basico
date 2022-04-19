import {Component} from '@angular/core'

@Component({
  selector : 'app-contador',
  templateUrl : 'contador.component.html',


})

export class ContadorComponent  {
  title = 'bases';
  base : number = 5;
  numero:number = 0;


  acumular(operador: string){

    if(operador == '+'){
      this.numero = this.numero + this.base;
    }
    else{
      this.numero = this.numero - this.base;
    }


  }
}
