import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent {

  activeTab : number = 1;

  setActive(n:number){
    this.activeTab = n;
  }
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };

  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [
      'Station Name bummy 1',
      'Station Name bummy 2',
      'Station Name bummy 3',
      'Station Name bummy 4',
      'Station Name bummy 5'],
    datasets: [
      {
        data: [250, 200, 220, 270, 200],
        backgroundColor: '#ff7f5c',
        label: 'Sales',
        barThickness: 20
      },
    ],
  };
  public barChartData2: ChartData<'bar'> = {
    labels: [
      'Trans bummy 1',
      'Trans bummy 2',
      'Trans bummy 3',
      'Trans bummy 4',
      'Trans bummy 5',
  ],
    datasets: [
      {
        data: [140, 150, 200, 270, 200],
        backgroundColor: '#ff7f5c',
        label: 'Transactions',
        barThickness: 20
      },
    ],
  };
  public barChartData3: ChartData<'bar'> = {
    labels: [
      'Values bummy 1',
      'Values bummy 2',
      'Values bummy 3',
      'Values bummy 4',
      'Values bummy 5',
  ],
    datasets: [
      {
        data: [140, 150, 200, 270, 200],
        backgroundColor: '#ff7f5c',
        label: 'Values',
        barThickness: 20
      },
    ],
  };
  public barChartData4: ChartData<'bar'> = {
    labels: [
      'Compression bummy 1',
      'Compression bummy 2',
      'Compression bummy 3',
      'Compression bummy 4',
      'Compression bummy 5',
  ],
    datasets: [
      {
        data: [140, 150, 200, 270, 200],
        backgroundColor: '#ff7f5c',
        label: 'Compression',
        barThickness: 20
      },
    ],
  };


}
