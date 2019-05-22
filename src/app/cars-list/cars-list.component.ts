import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Icar } from '../car';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  @Input() cars: Icar[] = []; 
  
 car: Icar; 


  @Output() carSelectedEvent = new EventEmitter<Icar>()

  constructor() { }

  ngOnInit() {
  }

 

  selectedCar(car: Icar): any {
    this.car = car;
    this.shotEvent()
  }

  shotEvent() {
    this.carSelectedEvent.emit(this.car)
  }
  

  

  

  
  

}
