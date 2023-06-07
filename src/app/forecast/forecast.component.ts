import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  title = 'weather-app';
  navigationLinks = ['Home', 'Counter', 'Fetch Data'];
  tableHeaders = ['Date and Time', 'Temp. (C)', 'Temp. (F)', 'Condition'];

  weatherConditions: any[] = [];
  selectedCondition: any;
  forecastData: any[] = [];
  filteredData: any[] = [];
  weatherDataError = '';
  weatherConditionsError = '';

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.fetchWeatherConditions();
    this.fetchWeatherData();
  }

  fetchWeatherConditions() {
    this.forecastService.getConditions().subscribe({
      next: (data) => {
        this.weatherConditions = data?.weatherCondition?.map((condition: any) => condition.condition) || [];
      },
      error: () => {
        this.weatherConditionsError = 'Error fetching weather conditions';
      }
    });
  }

  fetchWeatherData() {
    this.forecastService.getConditionData().subscribe({
      next: (forecast) => {
        this.forecastData = forecast.data;
        this.filteredData = this.forecastData;
      },
      error: () => {
        this.weatherDataError = 'Error fetching weather data';
      }
    });
  }

  filterData() {
    this.filteredData = this.selectedCondition && this.selectedCondition !== 'All'
      ? this.forecastData.filter(item => item.condition === this.selectedCondition)
      : this.forecastData;
  }

  convertTemperature(temperature: number, unit: 'C' | 'F'): string {
    if (unit === 'C') {
      return temperature + '°C';
    } else if (unit === 'F') {
      const fahrenheit = (temperature * 9) / 5 + 32;
      return fahrenheit + '°F';
    } else {
      return '';
    }
  }

}
