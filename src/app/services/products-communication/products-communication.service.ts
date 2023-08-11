import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsCommunicationService {
  private showBreakfastSource = new BehaviorSubject<boolean>(false);
  showBreakfast$ = this.showBreakfastSource.asObservable();

  private showMainMenuSource = new BehaviorSubject<boolean>(false);
  showMainMenu$ = this.showMainMenuSource.asObservable();

  setShowBreakfast(value: boolean) {
    this.showBreakfastSource.next(value);
  }

  setShowMainMenu(value: boolean) {
    this.showMainMenuSource.next(value);
  }
}
