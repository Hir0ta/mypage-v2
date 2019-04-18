import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { BroodCombComponent } from './app/brood-comb/brood-comb.component';
import { CandyComponent } from './app/candy/candy.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


function createBroodComb ()
{
	const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
	const broodComb = new BroodCombComponent(canvas);
	broodComb.draw();
}

createBroodComb();

function createCandyText()
{
	const canvas = <HTMLCanvasElement>document.getElementById('candy-text');
	const candy = new CandyComponent(canvas);
	candy.draw();
}

createCandyText();