import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes : string[] = ['supermans','batman','flac'];

  heroeBorrados : any[] = [];

  borrado:boolean = false;

  borrar(){
    this.borrado= true;
    let heroe = this.heroes.pop();

    this.heroeBorrados.push(heroe)

  }

}
