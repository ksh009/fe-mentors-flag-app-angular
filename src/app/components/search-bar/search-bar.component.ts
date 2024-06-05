import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../theme-data.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrl: "./search-bar.component.css",
})
export class SearchBarComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  searchValue: string = "";

  
  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      this.themeMode = mode;
    });
    
    this.themeDataService.searchQuery$.subscribe((searchTerm) => {
      console.log("searchTerm", searchTerm);
    });
  }

  onSearch() {
    this.themeDataService.sendSearchQuery(
      this.searchValue.trim().toLowerCase()
    );
  }
}
