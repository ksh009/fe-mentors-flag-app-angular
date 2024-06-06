import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import { QueryDataService } from "../../services/query-data/query-data.service";
import data from "../../../assets/cleaned_data.json";

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

  countries: Country[] = data as Country[];

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
        item.common_name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.filterTerm) {
      filteredData = filteredData.filter((item) =>
        item.region.toLowerCase().includes(this.filterTerm.toLowerCase())
      );
    }

    this.countries = filteredData as Country[];
  }
}

interface Country {
  common_name: string;
  official_name: string;
  native_name: string;
  currencies: { name: string; symbol: string };
  capital?: string[];
  region: string;
  subregion: string;
  languages: string[];
  borders?: string[]; 
  population: number;
  flags: string;
}
