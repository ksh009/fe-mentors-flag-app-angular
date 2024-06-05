import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {
  private themeModeSubject = new Subject<string>();
  themeMode$ = this.themeModeSubject.asObservable();

  constructor() {}

  toggleThemeMode(mode:string) {
    this.themeModeSubject.next(mode);
  }
}
