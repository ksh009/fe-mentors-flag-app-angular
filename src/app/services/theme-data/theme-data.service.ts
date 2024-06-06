import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {
  private themeModeSubject = new Subject<string>();
  private searchQuerySubject = new Subject<string>();

  themeMode$ = this.themeModeSubject.asObservable();
  searchQuery$ = this.searchQuerySubject.asObservable();

  constructor() {}

  toggleThemeMode(mode:string) {
    this.themeModeSubject.next(mode);
  }

  sendSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }
}
