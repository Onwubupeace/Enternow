import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  standalone: false,
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  showForm = false;
  staffId = '';
  staffName = '';
  department = '';
  time = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitForm() {
    alert('Sign-In created successfully for ${this.staffName} (${this.department}) at ${this.time}');
    this.staffId = this.staffName = this.department = this.time = '';
    this.showForm = false;
  }
}