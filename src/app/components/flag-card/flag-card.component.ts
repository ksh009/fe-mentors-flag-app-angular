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
