import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Selectable options
  selectableOptions: any = {
    'Handtasche 1': {
      'Oberfläche': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      },
      'Henkel': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      },
      'Interieur': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      }
    },
    'Handtasche 2': {
      'Oberfläche': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      },
      'Henkel': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      },
      'Interieur': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      }
    },
    'Bauchtasche': {
      'Oberfläche': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      },
      'Interieur': {
        'Leder': 1.5,
        'Plastik': 2.5,
        'Wolle': 1
      }
    }
  }
  selectedPurseType = '';
  purseOptions: string[] = [];
  components: string[] = [];
  componentOptions: string[] = [];


  // Selected options for calculation
  parameter: any = {}; 

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
    this.purseOptions = Object.keys(this.selectableOptions);
    this.changePurseType(this.purseOptions[0]);
  }

  changePurseType(option: String) {
    this.parameter = {
      'selectedPurseType': option
    }; 
    this.components = Object.keys(this.selectableOptions[this.parameter.selectedPurseType])
    this.components.forEach(component => {
      this.parameter[component] = '';
    })
    this.recalculateValue();
  }

  recalculateValue () {
    console.log('Recalculate Value triggered');
    // TO-DO: Calculation (Result must be between 0 and 100)
    let result = 0;


    // TO DO Berechnung


    result = Math.random() * 100;
    console.log('Calculation result', result);

    // Apply result to gauge 
    this.gauge.needleValue = result;
    this.gauge.bottomLabel = result.toFixed(2);
  }


}
