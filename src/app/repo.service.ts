import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private reposUrl ;  // URL to web api
  private repoUrl;
  constructor( private http: HttpClient) { }

  getUserRepos(userName): Observable<Repo[]> {
  	 this.reposUrl = 'https://api.github.com/users/'+userName+'/repos'; 
      return this.http.get<Repo[]>(this.reposUrl)
  }

  // getHero(id: number): Observable<Repo> {
  //    // this.repoUrl = 'https://api.github.com/users/'+userName+'/repos'; 
  //    //  return this.http.get<Repo>(this.repoUrl)
   
  // }
}
