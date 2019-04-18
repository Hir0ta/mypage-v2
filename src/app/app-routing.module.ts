import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
import { ColorClockComponent } from './color-clock/color-clock.component';
import { BroodCombComponent } from './brood-comb/brood-comb.component';
import { HyperspaceComponent } from './hyperspace/hyperspace.component';
import { ColorfulComponent } from './colorful/colorful.component'; 
import { CandyComponent } from './candy/candy.component';

const routes: Routes = [
	{ path: 'intro', component: IntroComponent},
	{ path: 'hobbies', component: HobbiesComponent},
	{ path: 'guess-the-number', component: GuessTheNumberComponent},
	{ path: 'color-clock', component: ColorClockComponent},
	{ path: 'broodcomb', component: BroodCombComponent},
	{ path: 'hyperspace', component: HyperspaceComponent},
	{ path: 'colorful-rectange', component: ColorfulComponent},
	{ path: 'candy', component: CandyComponent}
];

@NgModule({
	imports: 
	[
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
