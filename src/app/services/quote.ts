import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quotesUrl = 'assets/quotes.json';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<string[]> {
    return this.http.get<string[]>(this.quotesUrl);
  }
}