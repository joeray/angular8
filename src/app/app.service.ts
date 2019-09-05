import { HttpClient } from '@angular/common/http';
import { Observable, from, of, throwError } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Repo } from './models/repo';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class AppService {
  public BASE_URL = 'https://api.github.com';
  public username: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getRepos(username): Observable<Repo[]> {
    console.log('getrepos', username);
    this.messageService.clear();
    this.username = username;
    let reposUrl = `${this.BASE_URL}/users/${this.username}/repos?per_page=250`;
    return this.http.get<Repo[]>(reposUrl)
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  getData(username): Observable<any> {
    console.log('getdata', username);

    this.messageService.clear();
    this.username = username;
    let userUrl = `${this.BASE_URL}/users/${this.username}`;
    let orgUrl = `${this.BASE_URL}/users/${this.username}/orgs`;
    let urls = [userUrl, orgUrl];
    return from(urls).pipe(
      mergeMap(url => this.http.get<any[]>(url)),
      catchError(error => of(`Error: ${error}`))
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
      this.messageService.add(errorMessage);
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      this.messageService.add(errorMessage);
    }
    return throwError(errorMessage);
  }
}