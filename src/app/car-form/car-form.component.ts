import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Icar } from '../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  @Input() car: Icar;

  constructor() { }

  ngOnInit() {
  }

}
