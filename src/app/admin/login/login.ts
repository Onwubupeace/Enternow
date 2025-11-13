// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   standalone: false,
//   templateUrl: './login.html',
//   styleUrl: './login.css',
// })
// export class Login {

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',  
  styleUrls: ['./login.css'],

})

export class Login implements OnInit{
  constructor( private fb : FormBuilder ) { }
  ngOnInit(): void {
   this.buildForm();
  }

  signInForm! : FormGroup;

  buildForm(){
    this.signInForm = this.fb.group({
      staffId : ['', [Validators.required]],
      password : ['', [Validators.required, Validators.minLength(8)]]
    
    })
  }
  submitForm(){
    console.log(this.signInForm.value)
  }

  companyName : String = "ENTERNOW IS LIVE, ADMIN SIGN-IN NOW!!!"
}

