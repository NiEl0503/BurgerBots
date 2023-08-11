import { Component } from '@angular/core';
import { ProductsCommunicationService } from '../../services/products-communication/products-communication.service';

@Component({
  selector: 'app-garcon',
  templateUrl: './garcon.component.html',
  styleUrls: ['./garcon.component.css']
})
export class GarconComponent {
  constructor(private productsCommunicationService: ProductsCommunicationService) {}

  showBreakfast() {
    this.productsCommunicationService.setShowBreakfast(true);
    this.productsCommunicationService.setShowMainMenu(false);
  }

  showMainMenu() {
    this.productsCommunicationService.setShowBreakfast(false);
    this.productsCommunicationService.setShowMainMenu(true);
  }
}