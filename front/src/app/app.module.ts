import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { FormsModule } from "@angular/forms";
import { HttpPersonneService } from "./services/http-personne.service";

@NgModule({
  declarations: [AppComponent, ListePersonnesComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [HttpPersonneService],
  bootstrap: [AppComponent]
})
export class AppModule {}
