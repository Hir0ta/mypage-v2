import { Component, OnInit, OnChanges } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { createText } from '@angular/core/src/view/text';

@Component({
  selector: 'app-brood-comb',
  templateUrl: './brood-comb.component.html',
  styleUrls: ['./brood-comb.component.css']
})

export class BroodCombComponent
{
	setSize:number = 0;

	hexagon(context, xCenter, yCenter, size, numberOfSides, color)
	{
		context.beginPath();
		context.moveTo (xCenter + size * Math.cos(0), yCenter + size * Math.sin(0));
		for (let i = 1; i <= numberOfSides; i++)
		{
			context.lineTo(xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
		}
		context.strokeStyle = color;
		context.lineWidth= 0.5;
		context.stroke();
		return;
	}

	broodComb(size)
	{
		var canvas:any = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		var color = "yellow";
		var space= 3;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var numberOfSides = 6;
		var xCenter=canvas.width/2;
		var yCenter=canvas.height/2;
		var newX;
		var newY;

		//center hexagon
		this.hexagon(context, xCenter, yCenter, size, numberOfSides, color);

		//empty hexagons
		for(let j = 1; j <= 9; j++)
		{
			if(j % 2 !=0)
			{
				newX = xCenter + Math.cos(j * (2 * Math.PI / 12)) * (2 * size);
				newY = yCenter - Math.sin(j * (2 * Math.PI / 12)) * (2 * size);
				this.hexagon(context, newX, newY, size, numberOfSides, color);
			}
		}

		//filled hexagon
		newX = xCenter + Math.cos(11 * (2 * Math.PI / 12)) * (2 * size);
		newY = yCenter - Math.sin(11 * (2 * Math.PI / 12)) * (2 * size);
		this.hexagon(context, newX, newY, size, numberOfSides, color);
		context.fillStyle = color;
		context.fill();
	}

	change(changes) 
	{
		this.setSize = changes;
		//this.drawRect();
		this.broodComb(this.setSize);
	}
}
