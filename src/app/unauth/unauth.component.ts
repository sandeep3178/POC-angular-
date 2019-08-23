import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.css']
})
export class UnauthComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }
  newfunc() {
    this.router.navigateByUrl("login");
  }
}
