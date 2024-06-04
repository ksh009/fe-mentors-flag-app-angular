import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  themeMode: string = "dark";

  toggleThemeMode() {
    this.themeMode = this.themeMode === "dark" ? "light" : "dark";
  }

  setFontColor() : string {
    return this.themeMode === 'dark' ? 'text-white' : 'text-veryDarkBlueLM'
  }

  setBackGroundColor() : string {
    return this.themeMode === 'dark' ? 'bg-darkBlue' : 'bg-white'
  }
}
