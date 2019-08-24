import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service'; //auth service for authentication of user and admin
import { Router } from '@angular/router';
import { UserService } from '../user.service'; //userservice for displaying current page and current user on header
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  formval: any = [];
  logindetails: any = [];
  currentUser: any;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, public authService: AuthService, private router: Router, public userservice: UserService) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],  //form fields
      password: ['', [Validators.required, Validators.minLength(8), /* Validators.pattern('(?=.*[A-Z])') */]]
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  fetchData() {
    this.http.get("http://localhost:3000/admin").subscribe(data => {  //function to fetch data from json-server db
      this.formval = data;
      console.log(this.formval);

    })
  }
  authUser(loginDetails) {  //function to authenticate user and admin 
    this.logindetails = loginDetails;
    console.log("reaching")
    console.log(this.logindetails);
    for (let i = 0; i < this.formval.length; i++) {
      if ((this.logindetails.email === this.formval[i].email) && (this.logindetails.password === this.formval[i].password)) {

        this.currentUser = this.formval[i].name;
        console.log(this.currentUser);
        this.userservice.globalUser(this.currentUser);
        this.authService.loggin();
        this.userservice.user();
        this.router.navigateByUrl('admin');

        break;
      }
    }

  }

  ngOnInit() {
    this.fetchData()
  }
  onSubmit() {
    if ((this.loginForm.controls.password.valid) && (this.loginForm.controls.email.valid)) { //function containing details of the input provided by user and send it to above function for authentication
      this.isSubmitted = true;
      console.log(this.loginForm.value);
      this.authUser(this.loginForm.value);


    }
    else {
      alert("invalid details")
      this.router.navigateByUrl('unauth');
    }
  }
}
