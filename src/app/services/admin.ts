import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IStaff} from '../interfaces/staff'

@Injectable({
  providedIn: 'root'
})
export class Admin {
  constructor ( private httpClient : HttpClient) {}

getStaff () : Observable<IStaff[]>{
    return this.httpClient.get<IStaff[]>("https://jsonplaceholder.typicode.com/users")
  }

  createStaff(data: IStaff): Observable<IStaff>{
    return this.httpClient.post<IStaff>("https://jsonplaceholder.typicode.com/users", data);
  }
  
  editStaff(id: number, data: Partial<IStaff>): Observable<IStaff>{
    return this.httpClient.patch<IStaff>(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  }
  
  deleteStaff(id: number): Observable<void>{
    return this.httpClient.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}