import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  pagename: string = "Add-employee";
  addemployee: FormGroup;
  isSubmitted = false;
  formval: any;
  employees: any = [];
  constructor(public userservice: UserService, private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.addemployee = formbuilder.group({
      name: ["", Validators.required],
      department: ["", Validators.required],
      phone: ["", Validators.required],
      location: ["", Validators.required]

    })
  }
  newfunc5() {
    this.userservice.setPage(this.pagename);
  }
  empAdd(data1) {
    this.formval = data1;
    this.http.post("http://localhost:3000/employee", this.formval).subscribe(
      data => {
        console.log(data);
        alert("employee added");
        this.router.navigateByUrl("dashboard");


      }
    )
  }
  ngOnInit() {
    this.newfunc5();
  }
  onAdd() {
    this.isSubmitted = true
    if (this.addemployee.valid) {
      console.log(this.addemployee.value);
      this.empAdd(this.addemployee.value);

    }
  }
}