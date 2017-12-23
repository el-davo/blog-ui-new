import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() problem: number[];
  colorScheme = {
    domain: ['#5AA454']
  };
  dimensions = [200, 200];

  constructor() {
  }

  ngOnInit() {
  }

}
