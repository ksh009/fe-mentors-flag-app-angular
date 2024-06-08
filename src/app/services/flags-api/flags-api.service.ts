import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Country } from "../../interfaces/Country";

@Injectable({
  providedIn: "root",
})
export class FlagsApiService {
  constructor(private http: HttpClient) {}

  getFlagData(): Observable<Country[]> {
    const url = "http://localhost:5000/flags";

    return this.http.get<Country[]>(url).pipe(
      map((response) => response),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
