import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn implements OnInit{
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

  companyName : String = "ENTERNOW IS LIVE, SIGN-IN NOW!!!"
}
