import { Component, Input } from '@angular/core'
import { Objeto } from "./objeto";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { ObjetoComponent } from './objetosComponent';

@Component({
    selector: 'mi-objeto',
    template: `
        
        <div *ngIf="objetoDetalle">
        <h2>{{objetoDetalle.descripcion}}</h2>
            <form (ngSubmit)="onSubmit(f)" #f="ngForm" >
                <label>Estado: </label>
                <input [(ngModel)] = "objetoDetalle.estado"  type="text" ngModel name="estado" >
                <br>
                <label>Numero de Orden: </label>
                <input [(ngModel)] = "objetoDetalle.numeroOrden" type="text" ngModel name="numeroOrden">  
                <br>
                <label>Codigo de tipo de objeto: </label>
                <input [(ngModel)] = "objetoDetalle.tipoObjeto" type="text" ngModel name="tipoObjeto">
                <br>
                <label>Descripcion: </label>
                <input [(ngModel)] = "objetoDetalle.descripcion" type="text" ngModel name="descripcion">  
                <br>
                <label>Precio: </label>
                <input [(ngModel)] = "objetoDetalle.precio" type="text" ngModel name="precio">  
                <br>
                <br>
                <button type="submit" >MODIFICAR</button>  
                <button (click)="borrarObjeto()">BORRAR</button>
            </form>
        </div> 
    `
})



export class MiObjetoComponent{
    @Input()
    objetoDetalle:Objeto;
    tiposDeObjetos: any = [];
    ngOnInit() {
        this.mostrarTiposDeObjetos();
      }
    constructor(private http: Http) {}

    onSubmit(form: NgForm) {
        const { value: body } = form;
        console.log(this.objetoDetalle)
        this.http.put("https://proyectojsa215125.herokuapp.com/api/objetos/"+this.objetoDetalle._id, body)
          .subscribe(res => {
              console.log(body);
          });  
      }
      borrarObjeto(){
        this.http.delete("https://proyectojsa215125.herokuapp.com/api/objetos/"+this.objetoDetalle._id)
        .subscribe(res => {
            console.log(res);
            window.location.reload();
        });  
    }

    mostrarTiposDeObjetos() {
        this.http
          .get("http://proyectojsa215125.herokuapp.com/api/tipoObjeto")
          .subscribe(res => {
            this.tiposDeObjetos = res.json();
          });
      }
}