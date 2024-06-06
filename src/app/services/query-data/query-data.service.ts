import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueryDataService {

  private searchQuerySubject = new Subject<string>();

  searchQuery$ = this.searchQuerySubject.asObservable();

  constructor() {}

  sendSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }
}
