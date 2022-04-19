import {Component} from "@angular/core";


@Component(
  {
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
  }
)



export class HeroeComponent{

nombre: string = "Supermán";

edad : number = 14;


obtenerNombre(): string{

return this.nombre + ' - '+ this.edad;
}

}
