import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing-module';
import { FaceCapture } from './face-capture/face-capture';
import { SignIn } from './sign-in/sign-in';
import { SignOut } from './sign-out/sign-out';
import { MaterialModule } from '../material/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FaceCapture,
    SignIn,
    SignOut
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StaffModule { }
