import { Component, OnInit } from "@angular/core";
import { ThemeDataService } from "../../theme-data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  fontColor: string = "text-white"

  ngOnInit() { 
    this.themeDataService.primaryFontColor$.subscribe((fontColor) => {
      this.fontColor = fontColor;
    });
    
  }

  toggleThemeMode() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark";
    this.setFontColor();
  }

  setFontColor() {
    this.themeDataService.setFontColor(this.themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM')
  }

  setBackGroundColor() : string {
    return this.themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'
  }
}
