import { Injectable } from '@angular/core';
import { Repo } from './repo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  private reposUrl ;  // URL to web api
  private repoUrl;
  public repos : Repo [] ;
   public repo : Repo  ;
  constructor( private http: HttpClient,
    private messageService: MessageService) { }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        this.log(`User Not Found`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  getUserRepos(userName): Observable<Repo[]> {
  	 this.reposUrl = 'https://api.github.com/users/'+userName+'/repos'; 
      return this.http.get<Repo[]>(this.reposUrl)
               .pipe(
                    
                    catchError(this.handleError<Repo[]>('getUserRepos', []))
                ) ;
  }
 
  private log(message: string) {
    this.messageService.add('RepoService: ' + message);
  }
  
}
