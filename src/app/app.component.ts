import { Component,OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import { TipoObjeto } from './tipoObjeto';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})


export class AppComponent implements OnInit { 
  tiposDeObjetos: any = [];
  tipoObjetoElegido: TipoObjeto;
  ngOnInit() {
    this.mostrarTiposDeObjetos();
  }
  tituloNuevoTipoObjeto = 'Nuevo Tipo de Objeto';
  tituloListadoTipoObjeto = 'Todos los tipos de objeto'
  tituloBorrarTipoObjeto = 'Buscar Tipo de Objeto para eliminar'
  tituloModificarTipoObjeto = 'Buscar Tipo de Objeto para modificar'

constructor(private http: Http) {}

 onSubmit(form: NgForm) {
  const { value: body } = form;
  this.http.post("http://proyectojsa215125.herokuapp.com/api/tipoObjeto", body)
    .subscribe(res => {
      this.mostrarTiposDeObjetos();
    });  
}



mostrarTiposDeObjetos() {
  this.http
    .get("http://proyectojsa215125.herokuapp.com/api/tipoObjeto")
    .subscribe(res => {
      this.tiposDeObjetos = res.json();
    });
}

elegirTipoObjeto(_tipoObjeto: TipoObjeto): void {
  this.tipoObjetoElegido = _tipoObjeto;
}




 }




