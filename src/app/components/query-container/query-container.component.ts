import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from '../../theme-data.service';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrls: ['./query-container.component.css']
})
export class QueryContainerComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  title = 'flag-application';
  countries: any[] = [];

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      console.log("mode", mode);
      this.themeMode = mode;
    });
    // Will be populated via a service later 
    this.countries = data;
  }
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    [key: string]: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  cioc?: string;
  independent: boolean;
}

