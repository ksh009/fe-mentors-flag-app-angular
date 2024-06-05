import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QueryContainerComponent } from "./components/query-container/query-container.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";
import { FlagCardComponent } from "./components/flag-card/flag-card.component";
import {
  FormsModule, ReactiveFormsModule
} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QueryContainerComponent,
    SearchBarComponent,
    FilterBarComponent,
    FlagCardComponent
    // InteractionsTableComponent,
    // SidebarComponent,
    // SidebarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
