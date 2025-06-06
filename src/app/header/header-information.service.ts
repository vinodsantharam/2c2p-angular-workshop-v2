import { Injectable } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HeaderInformationViewModel } from './header-information.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class HeaderInformationService {
  constructor(private weatherService: WeatherService, private accountService: AccountService) { }

  getHeaderInformation(): Observable<HeaderInformationViewModel> {
    return this.weatherService.getWeatherByCoordinates(13.736717, 100.523186).pipe(
      map((weather) => ({ weatherTemperature: weather.current.temperature_2m.toString(), videoCount: this.accountService.getVideos().length }))
    );
  }
}   