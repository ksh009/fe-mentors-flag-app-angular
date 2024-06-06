import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrl: "./filter-bar.component.css",
})
export class FilterBarComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService
  ) {}
  themeMode: string = "dark";
  regions: string[] = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  filterTerm: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  onFilterTermSelect() {
    this.queryDataService.sendFilterQuery(
      this.filterTerm.trim().toLowerCase()
    );
  }
}

/*
.
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routes.ts
│   │   ├── components
│   │   │   ├── filter-bar
│   │   │   │   ├── filter-bar.component.css
│   │   │   │   ├── filter-bar.component.html
│   │   │   │   ├── filter-bar.component.spec.ts
│   │   │   │   └── filter-bar.component.ts
│   │   │   ├── flag-card
│   │   │   │   ├── flag-card.component.css
│   │   │   │   ├── flag-card.component.html
│   │   │   │   ├── flag-card.component.spec.ts
│   │   │   │   └── flag-card.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.css
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   ├── query-container
│   │   │   │   ├── query-container.component.css
│   │   │   │   ├── query-container.component.html
│   │   │   │   ├── query-container.component.spec.ts
│   │   │   │   └── query-container.component.ts
│   │   │   └── search-bar
│   │   │       ├── search-bar.component.css
│   │   │       ├── search-bar.component.html
│   │   │       ├── search-bar.component.spec.ts
│   │   │       └── search-bar.component.ts
│   │   └── services
│   │       ├── query-data
│   │       │   ├── query-data.service.spec.ts
│   │       │   └── query-data.service.ts
│   │       └── theme-data
│   │           ├── theme-data.service.spec.ts
│   │           └── theme-data.service.ts
│   ├── assets
│   │   └── data.json
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json



├── package.json
{
  "name": "flag-application",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "eslint --fix ."
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^17.3.0",
    "@angular/common": "^17.3.0",
    "@angular/compiler": "^17.3.0",
    "@angular/core": "^17.3.0",
    "@angular/forms": "^17.3.0",
    "@angular/platform-browser": "^17.3.0",
    "@angular/platform-browser-dynamic": "^17.3.0",
    "@angular/router": "^17.3.0",
    "@fortawesome/fontawesome-free": "^6.5.2",
    "rxjs": "~7.8.0",
    "tslib": "^2.6.2",
    "zone.js": "~0.14.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^17.3.1",
    "@angular-eslint/eslint-plugin": "^17.3.0",
    "@angular-eslint/eslint-plugin-template": "^17.3.0",
    "@angular-eslint/schematics": "^17.3.0",
    "@angular-eslint/template-parser": "^17.3.0",
    "@angular/cli": "^17.3.1",
    "@angular/compiler-cli": "^17.3.0",
    "@types/jasmine": "~5.1.0",
    "@typescript-eslint/eslint-plugin": "^7.6.0",
    "@typescript-eslint/parser": "^7.6.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "typescript": "~5.4.2"
  }
}

├── app.component.html
<app-navbar></app-navbar>
<app-query-container></app-query-container>

<router-outlet />

├── app.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from './services/theme-data/theme-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  title = 'flag-application';

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

}

├── app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QueryContainerComponent } from "./components/query-container/query-container.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";
import { FlagCardComponent } from "./components/flag-card/flag-card.component";
import {
  FormsModule, ReactiveFormsModule
} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QueryContainerComponent,
    SearchBarComponent,
    FilterBarComponent,
    FlagCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

├── app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [];


------------------------------------
├── filter-bar.component.html
<div
class="rounded shadow-lg w-32"
[ngClass]="themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'"
>
<select
  class="py-1 px-2 rounded leading-tight focus:outline-none focus:border-gray-500 bg-transparent h-9 text-xs w-full"
  [ngClass]="themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'"
  placeholder="Filter by region"
  (change)="onFilterTermSelect()"
  [(ngModel)]="filterTerm"
>
  <option
    class="border-none"
    [ngClass]="themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'"
    value=""
    disabled
    selected
  >
    Filter by region
  </option>
  <option
    class="border-none"
    [ngClass]="themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'"
    *ngFor="let region of regions"
    [value]="region"
  >
    {{ region === "" ? "All" : region }}
  </option>
</select>
</div>

└── filter-bar.component.ts
import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";

@Component({
  selector: "app-filter-bar",
  templateUrl: "./filter-bar.component.html",
  styleUrl: "./filter-bar.component.css",
})
export class FilterBarComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService
  ) {}
  themeMode: string = "dark";
  regions: string[] = ["", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  filterTerm: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  onFilterTermSelect() {
    this.queryDataService.sendFilterQuery(
      this.filterTerm.trim().toLowerCase()
    );
  }
}

--------------------------------------------

├── flag-card.component.html
<div class="grid grid-cols-4 gap-12 p-4 w-full h-full px-10 min-h-screen">
    <div
      *ngFor="let country of countries"
      [ngClass]="themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'"
      class="h-72 rounded flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
    >
      <div class="flex items-center justify-center h-48 max-h-36">
        <img
          [src]="country.flags.png"
          alt="Country Image"
          class="h-full w-full object-cover rounded-t"
        />
      </div>
      <div
        class="h-4/6 px-4 py-3"
        [ngClass]="themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'"
      >
        <div class="text-bodyHomepage font-bold mt-4 mb-2">
          {{ country.name.common }}
        </div>
        <ul class="text-xs mt-2 font-light">
          <li>
            Population:
            <span class="opacity-50">{{ country.population | number }}</span>
          </li>
          <li>
            Region: <span class="opacity-50">{{ country.region }}</span>
          </li>
          <li>
            Capital: <span class="opacity-50">{{ country.capital }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  

└── flag-card.component.ts
import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";
import data from "../../../assets/data.json";

@Component({
  selector: "app-flag-card",
  templateUrl: "./flag-card.component.html",
  styleUrls: ["./flag-card.component.css"],
})
export class FlagCardComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService
  ) {}
  themeMode: string = "dark";

  // Fix "any" later - linting error
  // Will be populated via a service later
  countries: any[] = data;

  // Store the current search term and filter term
  searchTerm: string = "";
  filterTerm: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
    this.queryDataService.searchQuery$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.applyFilters();
    });
    this.queryDataService.filterQuery$.subscribe((filterTerm) => {
      this.filterTerm = filterTerm;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let filteredData = data;

    if (this.searchTerm) {
      filteredData = filteredData.filter((item) =>
        item.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.filterTerm) {
      filteredData = filteredData.filter((item) =>
        item.region.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }

    this.countries = filteredData;
  }
}

--------------------------------------------
├── navbar.component.html
<nav
  class="w-full px-11 py-4 flex flex-row justify-between m-0 custom-shadow"
  [ngClass]="themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'"
>
  <a href="/" class="font-bold" [ngClass]="themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'">
    Where in the world?
  </a>
  <button (click)="toggleThemeMode()" class="font-light" [ngClass]="themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'">
    <i class="fas" [ngClass]="themeMode === 'dark' ? 'fa-sun' : 'fa-moon'"></i>
    {{ themeMode === "dark" ? "Light mode" : "Dark mode" }}
  </button>
</nav>

└── navbar.component.ts
import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  toggleThemeMode() {
    this.themeDataService.toggleThemeMode(this.themeMode === "dark" ? "light" : "dark")
  }
}

---------------------------------------------
├── query-container.component.html
<div
  class="w-full h-full flex flex-col justify-center items-center font-light my-shadow"
  [ngClass]="themeMode === 'dark' ? 'bg-veryDarkBlueDM' : 'bg-white'"
>
  <div class="w-full h-1/5 flex justify-between items-center px-10 py-4 mt-5">
    <app-search-bar></app-search-bar>
    <app-filter-bar></app-filter-bar>
  </div>

  <app-flag-card></app-flag-card>
</div>


└── query-container.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrls: ['./query-container.component.css']
})
export class QueryContainerComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }
}


├── search-bar.component.html
<div
  [ngClass]="themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'"
  class="py-1 px-2 rounded leading-tight focus:outline-none focus:border-gray-500 h-9 text-xs flex justify-start items-center w-80 shadow-lg"
>
  <i
    class="fas fa-search px-2"
    [ngClass]="themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'"
  ></i>
  <input
    type="text"
    placeholder="Search for a country..."
    class="px-2 py-1 bg-transparent focus:outline-none"
    [ngClass]="themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'"
    (input)="onSearch()"
    [(ngModel)]="searchValue"
  />
</div>

└── search-bar.component.ts
import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css",
})
export class SearchBarComponent implements OnInit {
  constructor(
    private themeDataService: ThemeDataService,
    private queryDataService: QueryDataService
  ) {}
  themeMode: string = "dark";
  searchValue: string = "";

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  onSearch() {
    this.queryDataService.sendSearchQuery(
      this.searchValue.trim().toLowerCase()
    );
  }
}

--------------------------------------------
└── query-data.service.ts
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueryDataService {

  private searchQuerySubject = new Subject<string>();
  private filterQuerySubject = new Subject<string>();

  searchQuery$ = this.searchQuerySubject.asObservable();
  filterQuery$ = this.filterQuerySubject.asObservable();


  constructor() {}

  sendSearchQuery(query: string) {
    this.searchQuerySubject.next(query);
  }

  sendFilterQuery(query: string) {
    this.filterQuerySubject.next(query);
  }
}


└── theme-data.service.ts
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


--------------------------------------
├── main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
  
*/


