import { NgForOf } from '@angular/common';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Input()
  usuario : UsuarioModel;


  constructor() { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

   }

  onSubmit( form: NgForm){

    if(form.invalid){return ;}
    console.log('se ha pulsado en crear cuenta')
    console.log(this.usuario);
    console.log(form);
  }
}
