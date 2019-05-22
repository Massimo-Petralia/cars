import { Component, OnInit, Input } from '@angular/core';
import { Icar } from '../car';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  @Input() cars: Icar[] = []; 


  constructor() { }

  ngOnInit() {
  }

}
