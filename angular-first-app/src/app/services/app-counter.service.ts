import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppCounterService {
  counter = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }
}
