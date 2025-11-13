import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-view',
  standalone: false,
  templateUrl: './staff.html',
  styleUrls: ['./staff.css']
})

export class Staff {
  staff = {
    id: '01023047-IT',
    name: 'Onwubu Peace Chekwube',
    department: 'IT',
    totalSignIns: 46,
    latenessCount: 8,
    deductions: 150, 
  };

  signInHistory = [
    { date: '2025-11-01', time: '08:25 AM', status: 'Late' },
    { date: '2025-11-02', time: '08:32 AM', status: 'Late' },
    { date: '2025-11-03', time: '08:15 AM', status: 'Late' },
    { date: '2025-11-04', time: '08:28 AM', status: 'Late' },
    { date: '2025-11-05', time: '08:17 AM', status: 'Late' },
    { date: '2025-11-06', time: '08:22 AM', status: 'Late' },
    { date: '2025-11-07', time: '08:09 AM', status: 'Late' },
    { date: '2025-11-08', time: '08:30 AM', status: 'Late' },
  
    { date: '2025-11-09', time: '07:58 AM', status: 'Early' },
    { date: '2025-11-10', time: '07:52 AM', status: 'Early' },
    { date: '2025-11-11', time: '07:45 AM', status: 'Early' },
    { date: '2025-11-12', time: '07:47 AM', status: 'Early' },
    { date: '2025-11-13', time: '07:55 AM', status: 'Early' },
    { date: '2025-11-14', time: '07:49 AM', status: 'Early' },
    { date: '2025-11-15', time: '07:53 AM', status: 'Early' },
    { date: '2025-11-16', time: '07:51 AM', status: 'Early' },
    { date: '2025-11-17', time: '07:46 AM', status: 'Early' },
  
    
  ];
  
}