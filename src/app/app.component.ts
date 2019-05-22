import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cars';
  dbUrl = 'http://localhost:3000/cars'
  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }


  getCars() {
    this.http.get(this.dbUrl).subscribe()
  }

}
