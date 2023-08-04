import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl="http://localhost:8081/users/getAll";
  
  private postUrl="http://localhost:8081/users/";
  private getUrl="http://localhost:8081/users/get";
  private putUrl="http://localhost:8081/users/update";
  private deleteUrl="http://localhost:8081/users/delete";
  constructor(private httpclient :HttpClient) { }


  getUserList(): Observable<User[]>{
   return this.httpclient.get<User[]>(this.baseUrl);
  }

  createUser(user: User):Observable<any>{
    return this.httpclient.post(`${this.postUrl}`,user);
  }
  
  getUserById(id: number): Observable<User>{
    return this.httpclient.get<User>(`${this.getUrl}/${id}`);
  }


  updateUser(id : number, user: User): Observable<Object>{
    return this.httpclient.put(`${this.putUrl}/${id}`,user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.deleteUrl}/${id}`);
  }

  
  
}
