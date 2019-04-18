import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brood-comb',
  templateUrl: './brood-comb.component.html',
  styleUrls: ['./brood-comb.component.css']
})

export class BroodCombComponent implements OnInit
{
	setSize:number;
	private readonly context: CanvasRenderingContext2D;
	numberOfSides:number = 6;
	color:string = 'yellow';

	constructor(private readonly canvas: HTMLCanvasElement) { 
		this.context = this.canvas.getContext('2d');
	}

	public hexagon (xCenter, yCenter, size)
	{ 
		this.context.beginPath();
		this.context.moveTo (xCenter +  size * Math.cos(0), yCenter +  size * Math.sin(0));          
		for (let i = 1; i <= this.numberOfSides;i++) 
		{
			this.context.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / this.numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / this.numberOfSides));
		}
		this.context.strokeStyle = this.color;
		this.context.lineWidth = 0.5;
		this.context.stroke();
		return;
	}

	draw()
	{
		let size = this.setSize;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		let xCenter=this.canvas.width/2;
		let yCenter=this.canvas.height/2;
		let newX;
		let newY;

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
		this.context.fillStyle = this.color;
		this.context.fill();
		console.log('x');
	}
	
	ngOnInit() 
	{
	}
}
