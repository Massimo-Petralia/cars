import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icar } from './car';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cars';
  dbUrl = 'http://localhost:3000/cars'
  cars: Icar[] = [];
  carSelected: Icar;
 
  

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this.http.get(this.dbUrl).subscribe((cars: Icar[]) => {
      this.cars = cars;
      console.log(this.cars)
    })
  }

 selectCar(car: Icar) {
  this.carSelected = car;
 }
 

}
