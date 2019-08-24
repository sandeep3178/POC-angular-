import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  getuser: any;
  setpage: any;
  constructor() { }
  public user() {
    localStorage.setItem('getuser', this.getuser) //to set name of user into localstorage so that it username will be there even after the component is reloaded
  }
  public getusr() {
    return localStorage.getItem('getuser'); //function to get name of the user name
  }
  globalUser(userdata) {   //function to set name of current user to header component
    this.getuser = userdata;
    console.log(this.getuser);
    return this.getuser;
  }

  setPage(data) {  //function to set name of current page to header
    this.setpage = data;
    console.log(this.setpage);
    return this.setpage;
  }

}
