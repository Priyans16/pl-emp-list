import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeData } from '../models/empData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<EmployeeData[]>('assets/EmployeeData.json');
  }
}
