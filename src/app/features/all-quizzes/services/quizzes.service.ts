import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http: HttpClient) { }

  getAllQuizzes() {
    return this.http.get('/assets/mock-data.json');
  }
}
