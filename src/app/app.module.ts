import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
import { IntroComponent } from './intro/intro.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ColorClockComponent } from './color-clock/color-clock.component';
import { BroodCombComponent } from './brood-comb/brood-comb.component';
import { HyperspaceComponent } from './hyperspace/hyperspace.component';
import { ColorfulComponent } from './colorful/colorful.component';
//import { CandyComponent } from './candy/candy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GuessTheNumberComponent,
    IntroComponent,
    HobbiesComponent,
    ColorClockComponent,
    BroodCombComponent,
    HyperspaceComponent,
    ColorfulComponent,
    //CandyComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
