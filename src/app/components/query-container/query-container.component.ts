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

