import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price-display',
  templateUrl: './product-price-display.component.html',
  styleUrls: ['./product-price-display.component.css']
})
export class ProductPriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
