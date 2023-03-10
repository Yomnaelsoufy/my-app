import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<[]> {
    return this.http.get<[]>('https://jsonplaceholder.typicode.com/users');
  }
}
