import { Component,OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import firefox = require('selenium-webdriver/firefox');
import { Objeto } from './objeto';

@Component({
  selector: 'objetos',
  templateUrl: './objetosComponent.html',
})


export class ObjetoComponent implements OnInit { 
  objetos: any = [];
  listobjetosEstado: any = [];
  objetoElegido: Objeto;
  ngOnInit() {
    this.mostrarObjetos();
  }
  tituloNuevoObjeto = 'Nuevo Objeto';
  tituloListadoObjeto = 'Todos Objetos';
  tituloListadoObjetosEstado = 'Todos Objetos Estado Especifico'


constructor(private http: Http) {}

 onSubmit(form: NgForm) {
  const { value: body } = form;
  this.http.post("https://proyectojsa215125.herokuapp.com/api/objetos", body)
    .subscribe(res => {
      console.log(res);
      this.mostrarObjetos();
    });  
}



mostrarObjetos() {
  this.http
    .get("https://proyectojsa215125.herokuapp.com/api/objetos")
    .subscribe(res => {
      this.objetos = res.json();
    });
}

elegirObjeto(_objeto: Objeto): void {
  this.objetoElegido = _objeto;
}

objetosEstado(estado : string): void {
 this.listobjetosEstado = [];
  for(let x=0;x<this.objetos.length;x++)
      if (this.objetos[x].estado==estado)
      {
        this.listobjetosEstado.push(this.objetos[x]);
      }
 }
}


