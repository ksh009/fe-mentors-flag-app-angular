import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';
import { Location } from '@angular/common';

// This info will need to be in a shared service. Origin will be the GET service then distribute. 
import data from '../../../assets/cleaned_data.json';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  themeMode: string = "dark";
  country!: Country;

  constructor(
    private route: ActivatedRoute,
    private themeDataService: ThemeDataService,
    private location: Location
  ) {}

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  
    const countryName = this.route.snapshot.paramMap.get('name');
    if (countryName) {
      const foundCountry = data.find((item) => item.common_name.toLowerCase() === countryName.toLowerCase());
      this.country = foundCountry as Country;
    }
  }

  goBack(): void {
    this.location.back();
  }
  
}
