import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(8), /* Validators.pattern('(?=.*[A-Z])') */]]
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.controls.password.valid) {
      this.isSubmitted = true;
      console.log(this.loginForm.value);
      this.router.navigateByUrl('admin');

    }
    else {
      alert("invalid details")
    }
  }
}