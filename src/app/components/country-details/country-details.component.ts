import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThemeDataService } from '../../services/theme-data/theme-data.service';

// This info will need to be in a shared service. Origin will be the GET service then distribute. 
import data from '../../../assets/cleaned_data.json';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  themeMode: string = "dark";
  country: any;

  constructor(
    private route: ActivatedRoute,
    private themeDataService: ThemeDataService
  ) {}

  // ngOnInit() {
  //   this.themeDataService.themeMode$.subscribe((mode) => {
  //     this.themeMode = mode;
  //   });

  //   const countryName = this.route.snapshot.paramMap.get('name');
  //   this.country = data.find((item) => item.common_name.toLowerCase() === countryName.toLowerCase());
  // }

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  
    const countryName = this.route.snapshot.paramMap.get('name');
    if (countryName) {
      this.country = data.find((item) => item.common_name.toLowerCase() === countryName.toLowerCase());
    } else {
      // Handle the case where countryName is null
      console.log("No country name in params!!!!!")
    }
  }
  
}
