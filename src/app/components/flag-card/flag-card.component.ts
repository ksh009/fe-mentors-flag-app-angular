import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../services/theme-data/theme-data.service";
import data from "../../../assets/data.json";

@Component({
  selector: "app-flag-card",
  templateUrl: "./flag-card.component.html",
  styleUrl: "./flag-card.component.css",
})
export class FlagCardComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  countries: any[] = data;

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      console.log("mode", mode);
      this.themeMode = mode;
    });
    this.themeDataService.searchQuery$.subscribe((searchTerm) => {
      console.log("searchTerm from flag comp", searchTerm);
      this.countries = searchTerm
        ? this.handleFilterBySearch(searchTerm)
        : data;
    });
    // Will be populated via a service later
  }

  handleFilterBySearch(term: string): any {
    const newData = data.filter((item) => item.name.common.toLowerCase().includes(term) || item.region.toLowerCase().includes(term));
    console.log("newData", newData);
    return newData;
  }
}
