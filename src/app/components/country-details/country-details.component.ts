import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { FlagsApiService } from "../../services/flags-api/flags-api.service";
import { Location } from "@angular/common";

// This info will need to be in a shared service. Origin will be the GET service then distribute.
import data from "../../../assets/cleaned_data.json";
import { Country } from "../../interfaces/Country";

@Component({
  selector: "app-country-details",
  templateUrl: "./country-details.component.html",
  styleUrls: ["./country-details.component.css"],
})
export class CountryDetailsComponent implements OnInit {
  themeMode: string = "dark";
  country!: Country;
  // countries!: Country[];

  constructor(
    private route: ActivatedRoute,
    private themeDataService: ThemeDataService,
    private flagsApiService: FlagsApiService,
    private location: Location,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getCountryDetails();
      }
    });
  }

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
    // this.flagsApiService.flagData$.subscribe((data) => {
    //   console.log("data", data)
    //   this.countries = data as Country[]
    // })
    this.getCountryDetails();
  }

  goBack(): void {
    this.location.back();
  }

  getCountryDetails(): void {
    const countryName = this.route.snapshot.paramMap.get("name");
    if (countryName) {
      // const foundCountry = data.find(
      //   (item) => item.common_name.toLowerCase() === countryName.toLowerCase()
      // );
      this.flagsApiService.getCountry(countryName).subscribe((foundCountry) => {
        // return countryDetails;
      this.country = foundCountry as Country;
      })
    }
  }

  goToDetails(countryName: string): void {
    this.router.navigate(["/country", countryName]);
  }
}
