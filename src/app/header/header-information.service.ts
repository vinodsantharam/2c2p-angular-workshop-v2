import { Injectable } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Observable, of } from 'rxjs';
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

    // Complexity: HIGH 💪🏾💪🏾💪🏾
    // We want to get the weather temperature and video count from 2 different services.
    // We want to combine the results and return a single observable.
    // The count should be updated when the user adds or removes a video to their list.
    // Hint: Use one of the rxjs operators we saw during the course.

    return of({ weatherTemperature: '-25', videoCount: -10 }); 
  }
}   