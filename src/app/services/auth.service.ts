import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private = 'https://identitytoolkit.googleapis.com/v1/';

  apiKey = 'AIzaSyCjCoz1TO2CRf5aB-Szet9BSDBFcV_8bM4'
  /*  crear un usuario https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]*/

  /* Login https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] */
  constructor(private http : HttpClient) { }

  logout(){

  }


  login(usuario: UsuarioModel){

  }

  nuevoUsuario(usuario: UsuarioModel){
  const authData = {
    email: usuario.email,
    password: usuario.password,
    returnSecureToken: true
  };
  return this.http.post(`${ this.private }accounts:signUp?key=${ this.apiKey }`,authData)
  }
}
