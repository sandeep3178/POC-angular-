import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service'; // user service imported to show current user and current page
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: any = [];
  pagename: string = "Dashboard";

  constructor(private http: HttpClient, public userservice: UserService) { }
  newfunc4() {
    this.userservice.setPage(this.pagename)  //function to display current page 
  }
  ngOnInit() {
    this.onSubmit();
    this.newfunc4();
  }

  onSubmit() {
    this.http.get("http://localhost:3000/employee").subscribe(   //function to get employee details from json-server db
      data => {

        this.employees = data;
        console.log(this.employees);

      })

  }
}
