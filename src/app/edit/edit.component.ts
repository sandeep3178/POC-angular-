import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service'; //userservice imported
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employees1: any = [];
  id: number;
  data: object = {};
  employeeobj: object = {};
  pagename = "Edit"

  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public userservice: UserService
  ) { }

  updateEmployee(employee1) {
    this.employeeobj = {
      name: employee1.name,
      department: employee1.department,
      phone: employee1.phone,
      location: employee1.location


    };

    const url = `${"http://localhost:3000/employee"}/${this.id}`;
    this.http
      .put(url, JSON.stringify(this.employeeobj), { headers: this.headers })
      .toPromise()
      .then(() => {
        alert("Details updated");
        this.router.navigate(["/dashboard"]);
      });
  }
  newfunc7() {
    this.userservice.setPage(this.pagename);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.newfunc7();
    });
    this.http.get("http://localhost:3000/employee").subscribe(
      data => {
        console.log(data);
        this.employees1 = data;
        for (var i = 0; i < this.employees1.length; i++) {
          if (parseInt(this.employees1[i].id) === this.id) {
            this.data = this.employees1[i];
            break;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
