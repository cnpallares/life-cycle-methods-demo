import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CarlesModule } from "./carles.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
