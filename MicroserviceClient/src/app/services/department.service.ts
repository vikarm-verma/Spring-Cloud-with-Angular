import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  private departmentsUrl: string;
  private headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  constructor(private http: HttpClient) {
    this.departmentsUrl = '/departments';
  }

  public findAll(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl+"/alldepartments");
  }

  public save(department: Department) {
    console.log("in save method "+JSON.stringify(department));
    return this.http.post<Department>(this.departmentsUrl+"/", JSON.stringify(department),this.headers);
  }



  public Call()
  {
    console.log("in call method");
    return this.http.get<Department>(this.departmentsUrl+"/");
  }

}
