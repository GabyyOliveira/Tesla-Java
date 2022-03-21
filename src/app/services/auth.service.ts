import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAutenticado: boolean = false

  constructor(private router: Router) { }

  doLogin(user: User){
    if(user.nome === 'wanessa@email.com' && user.senha === '1234'){
      this.userAutenticado = true;
      this.router.navigate(['/dashboard'])
    }else{
      this.userAutenticado = false;
    }
  }

  userEstaAutenticado(){
    return this.userAutenticado;
  }
}
