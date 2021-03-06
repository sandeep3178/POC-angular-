import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; //authservice contains service to authenticate the user and admin login
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service'; //userservice contains functions to display name of current page and current user on header

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  formval: any = [];
  logindetails: any = [];
  currentUser: any;

  constructor(private formbuilder: FormBuilder, private router: Router, public authService: AuthService, private http: HttpClient, private userservice: UserService) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],  //formfields with validations
      password: ['', [Validators.required, Validators.minLength(8), /* Validators.pattern('(?=.*[A-Z])') */]]
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  fetchData() {
    this.http.get("http://localhost:3000/formdata").subscribe(data => { //function to get user data from json-server db
      this.formval = data;
      console.log(this.formval);

    })
  }
  authUser(loginDetails) {    //function to check whether user is authenticated or not ... it will match email id and password from backend and current field values entered by user
    this.logindetails = loginDetails;
    console.log("reaching")
    console.log(this.logindetails);
    for (let i = 0; i < this.formval.length; i++) {
      if ((this.logindetails.email === this.formval[i].email) && (this.logindetails.password === this.formval[i].password)) {

        this.currentUser = this.formval[i].firstName;
        console.log(this.currentUser);
        this.userservice.globalUser(this.currentUser);
        this.authService.loggin();
        this.userservice.user();
        this.router.navigateByUrl('dashboard');

        break;
      }
    }

  }
  ngOnInit() {
    this.fetchData();

  }
  onSubmit() {
    if ((this.loginForm.controls.password.valid) && (this.loginForm.controls.email.valid)) {  //function fetching the values from form and passing it to function for authentication
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