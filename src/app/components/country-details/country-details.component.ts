import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { FlagsApiService } from "../../services/flags-api/flags-api.service";
import { Location } from "@angular/common";
import { Country } from "../../interfaces/Country";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"],
})
export class CountryDetailsComponent implements OnInit {
  themeMode: string = "dark";
  country!: Country;
  reqsMade: number = 0;

  constructor(
    private route: ActivatedRoute,
    private themeDataService: ThemeDataService,
    private flagsApiService: FlagsApiService,
    private location: Location,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      console.log("event", event);
      if (event instanceof NavigationEnd && event.url !== "/") {
        this.reqsMade++;
        this.getCountryDetails();
        console.log("this.reqsMade", this.reqsMade);
      }
    });
  }

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
  }

  goBack(): void {
    this.location.back();
  }

  getCountryDetails(): void {
    const countryName = this.route.snapshot.paramMap.get("name");
    if (countryName) {
      this.flagsApiService.getCountry(countryName).subscribe((foundCountry) => {
      this.country = foundCountry as Country;
      })
    }
  }

  goToDetails(countryName: string): void {
    this.router.navigate(["/country", countryName]);
  }
}
