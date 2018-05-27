import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://api.github.com/users/meritlouka/repos';  // URL to web api

  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl)
  }
}
