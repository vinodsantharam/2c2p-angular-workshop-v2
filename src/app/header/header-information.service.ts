import { Injectable } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs';
import { HeaderInformationViewModel } from './header-information.viewmodel';
import { VideoCounterService } from '../../services/video-counter.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInformationService {
  private readonly latitude = 13.736717; // Bangkok, Thailand
  private readonly longitude = 100.523186; // Bangkok, Thailand

  constructor(private weatherService: WeatherService, private videoCounterService: VideoCounterService) { }

  getHeaderInformation(): Observable<HeaderInformationViewModel> {
    return combineLatest([
      this.weatherService.getWeatherByCoordinates(this.latitude, this.longitude).pipe(
        map((weather) => ({ weatherTemperature: weather.current.temperature_2m.toString() }))
      ),
      this.videoCounterService.videoCountObservable()
    ]).pipe(map(([weather, videoCount]) => ({ weatherTemperature: weather.weatherTemperature, videoCount: videoCount ?? 0 })));  
  }
}   