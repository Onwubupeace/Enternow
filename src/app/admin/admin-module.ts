import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Staff } from './staff/staff';
import { Reports } from './reports/reports';
import { Login } from './login/login';
import { AdminHeader } from './layout/admin-header/admin-header';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { AdminSideNav } from './layout/admin-side-nav/admin-side-nav';

@NgModule({
  declarations: [
    Dashboard,
    Staff,
    Reports,
    Login,
    AdminHeader,
    AdminLayout,
    AdminSideNav
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdminModule { }