import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from '../../theme-data.service';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-flag-card',
  templateUrl: './flag-card.component.html',
  styleUrl: './flag-card.component.css'
})
export class FlagCardComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
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

