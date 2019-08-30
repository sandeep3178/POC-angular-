import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  employees1: any = [];
  id: any;
  data: object = {};
  employeeobj: object = {};
  pagename = "Employee Detail"
  private api = " http://localhost:3000/employee";

  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public userservice: UserService
  ) { }

  updateEmployee(employee1) {
    this.employeeobj = {        //payload to update selected employee
      name: employee1.name,
      department: employee1.department
    };


  }
  newfunc6() {
    this.userservice.setPage(this.pagename);  //userservice to display name of current page on header
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.newfunc6();
    });
    this.http.get("http://localhost:3000/employee/" + this.id).subscribe(    //function to get details in prepopulated fields
      data => {
        console.log(data);
        this.employees1 = data;
        console.log(this.employees1)


      },
      err => {
        console.log(err);
      }
    );
  }
  deleteEmp(id: number) {     //function to delete the details of a particular employee
    const url = `${this.api}/${id}`;
    if (confirm("are you sure")) {
      this.http.delete(url).subscribe(
        data => {
          console.log(data);
          this.router.navigateByUrl("/dashboard")
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
