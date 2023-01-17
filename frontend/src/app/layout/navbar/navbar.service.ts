import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/app.url.dev';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  URL: string = 'navbar/';

  constructor(private http: HttpClient) { }

  public recurso(){
    return this.http.get(`${API_URL}${this.URL}`);
  }
}
