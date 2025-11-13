import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceCapture } from './face-capture/face-capture';
import { SignIn } from './sign-in/sign-in';
import { SignOut } from './sign-out/sign-out';

const routes: Routes = [
  {
    path : 'face-capture',
    component : FaceCapture
  },{
    path : 'sign-in',
    component : SignIn
  },{
    path : 'sign-out',
    component : SignOut
  },
  {
    path : '',
    redirectTo : 'sign-in',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
