import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-clock',
  templateUrl: './color-clock.component.html',
  styleUrls: ['./color-clock.component.css']
})

export class ColorClockComponent implements OnInit {
	clockFace:string;

	constructor() { }

	colorClock()
	{
		let date = new Date();
		let hours = date.getHours();
		let colorHours = hours.toString();
		if (hours < 10)
		{
			colorHours = '0' + colorHours;
		}

		let minutes = date.getMinutes();
		let colorMinutes = minutes.toString();
		if (minutes < 10)
		{
			colorMinutes = '0' + colorMinutes;
		}

		let seconds = date.getSeconds();
		let colorSeconds = seconds.toString();
		if (seconds < 10)
		{
			colorSeconds = '0' + colorSeconds;
		}

		this.clockFace = (colorHours + ':' + colorMinutes+ ':' + colorSeconds);
		//console.log(this.clockFace);
		let hexColor= '#' + colorHours + colorMinutes + colorSeconds;

		//document.getElementById('clock').innerHTML = clockFace;

		setTimeout(()=>{this.colorClock();},1000);
		document.body.style.background = hexColor;
	}


	ngOnInit() {
	 this.colorClock();
	}

}
