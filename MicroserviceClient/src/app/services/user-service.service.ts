import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = '/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"/allusers");
  }

  public save(user: User) {
    console.log("in save method");
    return this.http.post<User>(this.usersUrl+"/", user);
  }



  public Call()
  {
    console.log("in call method");
    return this.http.get<User>(this.usersUrl+"/");
  }

}
