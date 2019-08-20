import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
  public loggin() {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn() {
    return !!localStorage.getItem('ACCESS_TOKEN');

  }
  public logOut() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}