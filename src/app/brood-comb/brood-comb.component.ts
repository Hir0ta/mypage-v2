import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brood-comb',
  templateUrl: './brood-comb.component.html',
  styleUrls: ['./brood-comb.component.css']
})
export class BroodCombComponent implements OnInit {
	sizeVar:number = 50;
	hexagon = (xCenter, yCenter, size) => {};

	constructor() { }

	broodComb(size)
	{
		console.log("size: " + size);
		size = this.sizeVar;
		let canvas:any = document.getElementById('myCanvas');
		let context = canvas.getContext('2d');
		let color = "yellow";
		let space= 3;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let numberOfSides = 6;
		let xCenter=canvas.width/2;
		let yCenter=canvas.height/2;
		let newX;
		let newY;

		// draw the hexagon
		this.hexagon (xCenter, yCenter, size)
		{ 
			context.beginPath();
			context.moveTo (xCenter +  size * Math.cos(0), yCenter +  size * Math.sin(0));          
			for (let i = 1; i <= numberOfSides;i++) 
			{
				context.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
			}
			context.strokeStyle = color;
			console.log(context.strokeStyle);
			context.lineWidth = 0.5;
			context.stroke();
			return;
		}

		//make the center hexagon:
		this.hexagon(xCenter,yCenter,size);

		//make the empty hexagons:
		for (let j = 1; j <= 9; j++)
		{
			if (j % 2 !=0)
			{
				newX = xCenter + Math.cos(j * (2 * Math.PI / 12)) * (2 * size);
				newY = yCenter - Math.sin(j * (2 * Math.PI / 12)) * (2 * size);
				this.hexagon(newX,newY,size)
			}
		}
		
		//make the filled hexagon:
		xCenter = xCenter + Math.cos(11 * (2 * Math.PI / 12)) * (2 * size);
		yCenter = yCenter - Math.sin(11 * (2 * Math.PI / 12)) * (2 * size);
		this.hexagon(xCenter, yCenter ,size)
		context.fillStyle = color;
		context.fill();
  	};

	ngOnInit() 
	{
		console.log( 'size: ' + this.sizeVar);
		this.broodComb(this.sizeVar);
	}

}
