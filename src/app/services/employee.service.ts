import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`http://localhost:9091/emp/getEmployeeByID/${id}`);
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(`http://localhost:9091/emp/AllEmployees`);
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:9091/emp/addEmployees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:9091/emp/updateEmployee/${id}`, data);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:9091/emp/deleteEmployeeById/${id}`);
  }

  searchByGender(gender: string): Observable<any> {
    return this.http.get(`http://localhost:9091/emp/searchByGender/${gender}`);
  }

  searchByTeam(team: string): Observable<any> {
    return this.http.get(`http://localhost:9091/emp/searchByTeam/${team}`);
  }

  searchByBirthDateRange(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`http://localhost:9091/emp/searchByBirthDateRange/${startDate}/${endDate}`);
  }

  searchByBirthYear(year: number): Observable<any> {
    return this.http.get(`http://localhost:9091/emp/searchByBirthYear/${year}`);
  }
}
