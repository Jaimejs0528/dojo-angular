import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private response:Object;
  constructor(private http:HttpClient) {

  }

  ngOnInit() {
  }

  requestWeather(city){
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=bf8fe02fb5288ea367500fa2eab2fd09`).subscribe(
      response =>{
        this.response = response;
      },
      error => {
        console.log(`Ops! something has happen, this was the error: ${ error.message }`);
      }
    )
  }
}
