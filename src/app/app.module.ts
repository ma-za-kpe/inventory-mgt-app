import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductPriceDisplayComponent } from './product-price-display/product-price-display.component';
import { AddToChartComponent } from './add-to-chart/add-to-chart.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductPriceDisplayComponent,
    AddToChartComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
