import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service'; //userservice imported to display current page name and current user
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employees1: any = [];
  _id: Number;
  Data: object = {};
  employeeobj: object = {};
  pagename = "Edit"

  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public userservice: UserService
  ) { }


  newfunc7() {
    this.userservice.setPage(this.pagename);  //function to set current page name in header
  }
  ngOnInit() {
    this.route.params.subscribe(params => {    //to get id of selected employee from routing URL
      this._id = params["id"];
      this.newfunc7();
    });
    this.http.get("http://localhost:3000/employee/" + this._id).subscribe(  // function to get details by id
      data => {
        console.log(data);
        this.employees1 = data;
        this.Data = data
        console.log(this.employees1)
        // for (var i = 0; i < this.employees1.length; i++) {
        //   if (parseInt(this.employees1[i]._id) === this._id) {
        //     this.data = this.employees1[i];
        //     break;


      },
      err => {
        console.log(err);
      }
    );
  }
  updateEmployee(employees) {
    console.log(employees)
    this.employees1 = employees;
    this.employeeobj = {
      empcode: this.employees1.empcode,
      name: this.employees1.name,    //payload containing details of the employee to be updated
      department: this.employees1.department,
      phone: this.employees1.phone,
      location: this.employees1.location


    };

    const url = `${"http://localhost:3000/employee"}/${this._id}`;
    this.http
      .put(url, JSON.stringify(this.employeeobj), { headers: this.headers })  //httpclient function to update selected employee
      .subscribe(d => {
        alert("Details updated");
        this.router.navigate(["/dashboard"]);
      },
        e => {
          console.log(e);

        });
  }
}
