import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(private http: HttpClient) {}

  get_gallery(): Observable<any> {
    return this.http.get('assets/api.json');
  }

  send_message(data: any): Observable<any> {
    const url = 'https://formspree.io/f/xwkabogv';
    return this.http.post(url, data);
  }
}
