import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToChartComponent } from './add-to-chart.component';

describe('AddToChartComponent', () => {
  let component: AddToChartComponent;
  let fixture: ComponentFixture<AddToChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
