import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-add-to-chart',
  templateUrl: './add-to-chart.component.html',
  styleUrls: ['./add-to-chart.component.css']
})
export class AddToChartComponent implements OnInit {


  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
