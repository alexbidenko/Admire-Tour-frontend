import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject('baseUrl') private baseUrl: string,
    private http: HttpClient
  ) { }

  public sendBackMessage(message: string): Observable<any> {
    return this.http.post(`${this.baseUrl}mail`, {body: message});
  }
}
