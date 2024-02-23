import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post('http://localhost:9091/emp/addEmployee', data, { headers: headers });
  }

  updateEmployee(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(`http://localhost:9091/emp/updateEmployee/${id}`, data ,{ headers: headers });
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
