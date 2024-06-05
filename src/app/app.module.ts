import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { QueryContainerComponent } from "./components/query-container/query-container.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QueryContainerComponent,
    // InteractionsTableComponent,
    // SidebarComponent,
    // SidebarFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
