import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  postForm(body: any) {
    return this.http.post(
      'https://api.apispreadsheets.com/data/99Owa7NEsu3n473r/',
      body
    );
  }
}
