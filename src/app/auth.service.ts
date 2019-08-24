import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }
  public loggin() {
    localStorage.setItem('ACCESS_TOKEN', "access_token"); //function to set access token to localstorage
  }

  public isLoggedIn() {
    return !!localStorage.getItem('ACCESS_TOKEN'); //function to get access token key from localstorage to check user is authenticated or not

  }
  public logOut() {
    localStorage.removeItem('ACCESS_TOKEN');  //function to remove both access token and key from localstorage 
  }
}