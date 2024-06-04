import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeDataService {

  private primaryFontColorSubject = new Subject<string>();

  primaryFontColor$ = this.primaryFontColorSubject.asObservable();

  constructor() {}

  setFontColor(color: string) {
    this.primaryFontColorSubject.next(color);
  }
}
