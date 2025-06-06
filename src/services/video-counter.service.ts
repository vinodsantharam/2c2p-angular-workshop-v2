import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideoCounterService {
  private readonly videoCount = new BehaviorSubject<number | undefined>(undefined);

  public videoCountObservable(): Observable<number | undefined> {
    return this.videoCount.asObservable();
  }

  updateVideoCount(count: number) {
    this.videoCount.next(count);
  }
}