import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

// import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // SearchBarComponent,
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
