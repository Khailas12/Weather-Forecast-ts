import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ForecastService {

  private weatherData = {
    "data": [
      {
        "condition": "Sunny",
        "datetime": "2023-05-27 09:00",
        "temperature": 28
      },
      {
        "condition": "Rainy",
        "datetime": "2023-05-27 12:00",
        "temperature": 22
      },
      {
        "condition": "Cloudy",
        "datetime": "2023-05-27 15:00",
        "temperature": 24
      },
      {
        "condition": "Snowy",
        "datetime": "2023-05-27 18:00",
        "temperature": -1
      },
      {
        "condition": "Partly Cloudy",
        "datetime": "2023-05-27 21:00",
        "temperature": 25
      },
      {
        "condition": "Sunny",
        "datetime": "2023-05-28 09:00",
        "temperature": 30
      },
      {
        "condition": "Rainy",
        "datetime": "2023-05-28 12:00",
        "temperature": 21
      },
      {
        "condition": "Cloudy",
        "datetime": "2023-05-28 15:00",
        "temperature": 23
      },
      {
        "condition": "Snowy",
        "datetime": "2023-05-28 18:00",
        "temperature": -3
      },
      {
        "condition": "Partly Cloudy",
        "datetime": "2023-05-28 21:00",
        "temperature": 26
      }
    ]
  };

  private weatherCondition = {
    "weatherCondition": [
      {
        "condition": "All"
      },
      {
        "condition": "Sunny"
      },
      {
        "condition": "Rainy"
      },
      {
        "condition": "Cloudy"
      },
      {
        "condition": "Snowy"
      },
      {
        "condition": "Partly Cloudy"
      }
    ]
  };

  getConditionData(): Observable<any> {
    return of(this.weatherData);
  }

  getConditions(): Observable<any> {
    return of(this.weatherCondition);
  }
}
