import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './MustMatch';
import { UserService } from '../user.service'; // userservice to be imported to display current page name on header
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Submitted = false;
  userList: any = [];
  addUser: FormGroup;
  formval: any;
  pagename: string = "Admin";

  constructor(private http: HttpClient, private formbuilder: FormBuilder, private userservice: UserService) {
    this.addUser = formbuilder.group({     // add user form fields
      firstName: ['', [Validators.required, Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')  // mustmatch function to match password and confirm password fields
      });
  }
  get f() {
    return this.addUser.controls;  // function to use formcontrols in form tag in admin.component.ts
  }
  adduser(userdata) {   //function to post add user form values to json-server db
    this.formval = userdata;
    this.http.post("http://localhost:3000/formdata", this.formval).subscribe(data => {
      alert("user Added");
    })

  }

  fetchData() {  // fucntion to fetch data from json-server db
    this.http.get("http://localhost:3000/formdata").subscribe(data => {
      this.userList = data;
      console.log(this.userList);

    })
  }
  newfunc3() {  //function to set current page name on header
    this.userservice.setPage(this.pagename);
  }

  ngOnInit() {
    this.fetchData();
    this.newfunc3();

  }
  onSubmit() {   //function to be triggered when submit button is pressed
    if (this.addUser.valid) {
      this.Submitted = true
      console.log(this.addUser.value);
      this.adduser(this.addUser.value);
    }
    else {
      alert("invalid details");
    }
  }

}
