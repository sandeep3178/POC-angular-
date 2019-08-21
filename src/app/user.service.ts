import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getuser: any;
  setpage: any;
  constructor() { }
  globalUser(userdata) {
    this.getuser = userdata;
    console.log(this.getuser);
    return this.getuser;
  }

  setPage(data) {
    this.setpage = data;
    console.log(this.setpage);
    return this.setpage;
  }

}
