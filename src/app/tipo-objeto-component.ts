import { Component, Input } from '@angular/core'
import { TipoObjeto } from "./tipoObjeto";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
    selector: 'mi-tipo-objeto',
    template: `
        
        <div *ngIf="tipoObjetoDetalle">
        <h2>{{tipoObjetoDetalle.nombre}}</h2>
            <form (ngSubmit)="onSubmit(f)" #f="ngForm" >
                <label>Nombre:</label>
                <input [(ngModel)] = "tipoObjetoDetalle.nombre" type="text" ngModel name="nombre">
                <label>Codigo:</label>
                <input [(ngModel)] = "tipoObjetoDetalle.codigo" type="text" ngModel name="codigo">  
                <button type="submit">MODIFICAR</button>  
                <button (click)="borrarTipoObjeto()">BORRAR</button>
            </form>
        </div> 
    `
})



export class TipoObjetoComponent{
    @Input()
    tipoObjetoDetalle:TipoObjeto
    constructor(private http: Http) {}

    onSubmit(form: NgForm) {
        const { value: body } = form;
        console.log(this.tipoObjetoDetalle)
        this.http.put("http://proyectojsa215125.herokuapp.com/api/tipoObjeto/"+this.tipoObjetoDetalle._id, body)
          .subscribe(res => {
              console.log(body);
          });  
      }
    borrarTipoObjeto(){
        this.http.delete("http://proyectojsa215125.herokuapp.com/api/tipoObjeto/"+this.tipoObjetoDetalle._id)
        .subscribe(res => {
            console.log(res);
        });  
    }
}