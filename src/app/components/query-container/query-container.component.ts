import { Component, OnInit } from '@angular/core';
import { ThemeDataService } from '../../theme-data.service';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrl: './query-container.component.css'
})
export class QueryContainerComponent implements OnInit {
  constructor(private themeDataService: ThemeDataService) {}
  themeMode: string = "dark";
  title = 'flag-application';

  ngOnInit() {
    this.themeDataService.themeMode$.subscribe((mode) => {
      console.log("mode", mode);
      this.themeMode = mode;
    });
  }
}


