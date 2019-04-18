import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { empty } from 'rxjs';

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit {
	randomNumber:number = Math.floor(Math.random()*100) +1;
	userGuess:number;
	lastGuesses = [];
	lastResult:number;
	lowOrHigh:string;
	guessCount:number = 1; 
	isReadOnly:boolean = false;
	reset:boolean = false;
	
  constructor() { }


  
  arrayToList = function(numbers)
  {
	return numbers.join(", ");
  }
  checkGuess()
  {
	//console.log(this.randomNumber);

	console.log(this.userGuess);
	if (this.guessCount < 10)
	{
		//console.log(this.guessCount);
		if (this.userGuess > this.randomNumber)
		{
			this.lowOrHigh = "Too high";
			this.lastGuesses.push(this.userGuess);
			this.userGuess = null;
			this.guessCount++;
		}
		else if (this.userGuess < this.randomNumber)
		{
			this.lowOrHigh = "Too low";
			this.lastGuesses.push(this.userGuess);
			this.userGuess = null;
			this.guessCount++;
		}
		else
		{
			this.lowOrHigh = "Congratulations!";
			this.isReadOnly = true;
			this.userGuess = null;
			this.reset = true;
			return;
		}
	}
	else if (this.guessCount == 10)
	{
		//console.log(this.guessCount);
		this.lowOrHigh = "Sorry, you've lost! :(";
		this.isReadOnly = true;
		this.userGuess = null;
		this.reset = true;
		return;
	}

	//console.log(this.lastGuesses);
	//console.log(this.lowOrHigh);


  }

  resetGame()
  {
	  this.isReadOnly = false;
	  this.reset = false;
	  this.userGuess = null;
	  this.lastGuesses = [];
	  this.guessCount = 1;
	  this.lowOrHigh = "";
	  this.randomNumber = Math.floor(Math.random()*100) +1;
  }

  ngOnInit() {
	
  }

}
