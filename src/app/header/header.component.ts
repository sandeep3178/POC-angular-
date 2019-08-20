import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authservice.logOut();
    this.router.navigateByUrl('login')
  }
}
