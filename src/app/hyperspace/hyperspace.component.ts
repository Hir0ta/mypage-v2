import { Component, OnInit } from '@angular/core';
import { CONTEXT } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-hyperspace',
  templateUrl: './hyperspace.component.html',
  styleUrls: ['./hyperspace.component.css']
})
export class HyperspaceComponent 
{

	hypersSpace(color)
	{
		var canvas:any = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var centerX = canvas.width/2;
		var centerY = canvas.height/2;
		var random = function(max, min) 
		{
			return Math.floor(Math.random()*(max-min+1)+min);
		}

		for(let i = 0; 1<=100; i++)
		{
			this.lineToCenter(random(canvas.clientWidth, 0), random(canvas.clientHeight, 0), centerX, centerY, color, context)
		}
	};

	lineToCenter(x, y, centerX, centerY, color, context)
	{
		context.beginPath();
		context.moveTo(x, y);
		context.lineTo(centerX, centerY);
		context.strokeStyle = color;
		context.stroke();
		return;
	};
		
}
