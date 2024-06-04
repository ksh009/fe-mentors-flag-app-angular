import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  themeMode: string = 'dark';
  themeModeStyles: ThemeModeStyles = {
    backGroundComponents: 'darkBlue',
    backGroundLayout: 'veryDarkBlueDM',
    fontColorPrimary: 'white'
  };
}

interface ThemeModeStyles {
  backGroundComponents: string,
  backGroundLayout: string,
  fontColorPrimary: string
}
