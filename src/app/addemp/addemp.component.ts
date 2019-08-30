import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  // user service imported for displaying username and current page on header.
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  pagename: string = "Add-employee"; //name of current page
  addemployee: FormGroup;
  isSubmitted = false;
  formval: any;
  employees: any = [];
  // today: Date = new Date();
  constructor(public userservice: UserService, private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.addemployee = formbuilder.group({      //reactive form fields for adding employees.
      empcode: ["", Validators.required],
      name: ["", Validators.required],
      department: ["", Validators.required],
      phone: ["", Validators.required],
      location: ["", Validators.required]

    })
  }
  get formControls() {     // fuction returning formcontrols to be used in html file
    return this.addemployee.controls;
  }
  newfunc5() {    // function using userservice to display current page on header
    this.userservice.setPage(this.pagename);
  }
  empAdd(data1) {    //function to post add employee form  details to json-server
    this.formval = data1;
    this.formval.today = Date.now();
    console.log(this.formval);
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
  onAdd() { // function to be triggered while pressing submit button. It will get form value which would be entered by user
    this.isSubmitted = true
    if (this.addemployee.valid) {
      console.log(this.addemployee.value);
      this.empAdd(this.addemployee.value);

    }
  }
}