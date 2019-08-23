import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from './MustMatch';
import { UserService } from '../user.service';
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
    this.addUser = formbuilder.group({
      firstName: ['', [Validators.required, Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }
  get f() {
    return this.addUser.controls;
  }
  adduser(userdata) {
    this.formval = userdata;
    this.http.post("http://localhost:3000/formdata", this.formval).subscribe(data => {
      alert("user Added");
    })

  }

  fetchData() {
    this.http.get("http://localhost:3000/formdata").subscribe(data => {
      this.userList = data;
      console.log(this.userList);

    })
  }
  newfunc3() {
    this.userservice.setPage(this.pagename);
  }

  ngOnInit() {
    this.fetchData();
    this.newfunc3();

  }
  onSubmit() {
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
