import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  currentUser: string;
  newuser: string;

  constructor(public authservice: AuthService, private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.newfunc();
    this.newFunc1();
  }
  logout() {
    this.authservice.logOut();
    localStorage.removeItem('getuser')
    this.router.navigateByUrl('login')
  }
  newfunc() {

    this.currentUser = JSON.stringify(localStorage.getItem('getuser')); //to get value from local stroage and send it to a variable to display name of user on header component
    console.log(this.currentUser);
    // this.currentUser = this.userservice.getuser;
    // return this.currentUser;
  }
  newFunc1() {
    this.title = this.userservice.setpage;   //function to display current page name
    return this.title;

  }

}
