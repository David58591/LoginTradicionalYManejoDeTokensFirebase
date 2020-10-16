import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private = 'https://identitytoolkit.googleapis.com/v1/';

  apiKey = 'AIzaSyCjCoz1TO2CRf5aB-Szet9BSDBFcV_8bM4'
  /*  crear un usuario https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]*/

  /* Login https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] */

  userToken : string;
  constructor(private http : HttpClient) {

    this.leerToken();
   }

  logout(){

  }


  login(usuario: UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(`${ this.private }accounts:signInWithPassword?key=${ this.apiKey }`,authData)
  }

  nuevoUsuario(usuario: UsuarioModel){
  const authData = {
    email: usuario.email,
    password: usuario.password,
    returnSecureToken: true
  };
  return this.http.post(`${ this.private }accounts:signUp?key=${ this.apiKey }`,authData)
  .pipe(
    map(resp =>{
      console.log('entro en el mapa del RXJS');
    this.guardarToken(resp['idToken']);
    })
  );
 }

 private guardarToken(idToken : string){
this.userToken = idToken;
localStorage.setItem('token',idToken);
 }

 leerToken(){
   if(localStorage.getItem('token')){
     this.userToken = localStorage.getItem('token');
   }else{
     this.userToken = '';
   }
   return this.userToken;
 }
}
