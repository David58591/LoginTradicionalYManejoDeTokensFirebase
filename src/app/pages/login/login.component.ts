import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recuerdame = false;
  constructor( private auth: AuthService, private router:Router) { }

  ngOnInit() {

    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.recuerdame = true;
    }
  }

  login ( form : NgForm){

    if(form.invalid){return; }

      Swal.fire({
          allowOutsideClick:false,
          text: 'Espere por favor...',
          icon: 'info'
      });

      Swal.showLoading();
     this.auth.login(this.usuario).subscribe(resp =>{
        console.log(resp);
        Swal.fire({
          allowOutsideClick:false,
          text: 'Logueado Exitosamente',
          icon: 'success'
      });
      this.router.navigateByUrl('/home');
      if(Swal.fire[2]==='success'){
         Swal.close();
      }
      if(this.recuerdame){
        localStorage.setItem('email',this.usuario.email);
      }
     },err=>{
       console.log(err.error.error.message);
       Swal.fire({
        allowOutsideClick:false,
        text: 'Error al Ingresar',
        icon: 'error'
    });
     });
  }

}
