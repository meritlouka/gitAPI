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
  public repos : Repo [] ;
   public repo : Repo  ;
  constructor( private http: HttpClient) { }

  getUserRepos(userName): Observable<Repo[]> {
  	 this.reposUrl = 'https://api.github.com/users/'+userName+'/repos'; 
      return this.http.get<Repo[]>(this.reposUrl)
  }

  getRepo(id: number,userName: string): Observable<Repo[]> {
      this.reposUrl = 'https://api.github.com/users/'+userName+'/repos'; 
       return this.http.get<Repo[]>(this.reposUrl)
  }
}
