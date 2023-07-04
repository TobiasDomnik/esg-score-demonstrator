import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Selectable options
  options_1 = ['Type 1', 'Type 2', 'Type 3'];
  options_2 = ['Object 1', 'Object 2', 'Object 3'];
  options_3 = ['Value 1', 'Value 2', 'Value 3'];

  // Selected options for calculation
  parameter = {
    selectedOption_1: 'Type 1',
    selectedOption_2: 'Object 3',
    selectedOption_3: 'Value 2'
  }; 

  // Gauge options
  gauge = {
    canvasWidth: 300,
    needleValue: 65,
    name: '',
    centralLabel: '',
    bottomLabel: '65',
    options: {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(44, 151, 222)', 'lightgray'],
      arcDelimiters: [30],
      rangeLabel: ['0', '100'],
      needleStartValue: 50,
    }
  }

  constructor () {}

  ngOnInit(): void {
    this.recalculateValue();
  }

  recalculateValue () {
    console.log('Recalculate Value triggered');
    // TO-DO: Calculation (Result must be between 0 and 100)
    let result = 0;


    result = Math.random() * 100;
    console.log('Calculation result', result);

    // Apply result to gauge 
    this.gauge.needleValue = result;
    this.gauge.bottomLabel = result.toFixed(2);
  }


}
