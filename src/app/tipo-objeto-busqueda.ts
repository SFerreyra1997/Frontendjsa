import { Component, Input } from '@angular/core'
import { TipoObjeto } from "./tipoObjeto";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
    selector: 'mi-tipo-objeto-buscar',
    template: `
    <div>
        <h1>Buscar TipoObjeto por ID</h1>
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                 <input type="text" ngModel name="id" placeholder="Ingrese el id" />
                <button type="submit">Buscar</button>
            </form> 
            <ul>
                <li *ngIf="tipoObjetoBuscado">
                    <span>{{ tipoObjetoBuscado.nombre }}</span> - {{tipoObjetoBuscado.codigo}}
                </li>  
            </ul>
        </div>
    `
})



export class TipoObjetoBusquedaComponent{
    constructor(private http: Http) {}
    tipoObjetoBuscado: TipoObjeto;
    onSubmit(form: NgForm) {
        const { value: body } = form;
        this.http.get("https://proyectojsa215125.herokuapp.com/api/tipoObjeto/"+body.id)
          .subscribe(res => {
              this.tipoObjetoBuscado = res.json();
              console.log(res);
          });  
      }

}