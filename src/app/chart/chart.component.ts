import { Component, Input, OnChanges, OnDestroy,SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnChanges ,OnDestroy{
  @Input() chartList :any[]=[]

  chartOptions:any
constructor() {
}


ngOnDestroy(): void {
  if (this.chartOptions) {
    this.chartOptions.destroy()
  }
}

ngOnChanges(changes: SimpleChanges): void {
  if (this.chartOptions) {
    this.chartOptions.destroy()
  }
  if(this.chartList.length > 0){
    this.renderchart()  
  }

}

renderchart(){
  const date=this.chartList.map(chart=>chart.date)
  const amount=this.chartList.map(chart=>chart.amount) 
  this.chartOptions = new Chart('canvas', {
    type: 'line',
    data: {
      labels: date,
      datasets: [
        {
          label: `transaction of ${this.chartList[0].name} `,
          data: amount,
          fill:false,
          tension:0.1
          
        },
      ],

    },
    options: {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true
      }
    },
   
      plugins: {
          legend: {
              labels: {
                  font: {
                      size:32
                  }
              }
              
          }
      }
  }
  });
}
}