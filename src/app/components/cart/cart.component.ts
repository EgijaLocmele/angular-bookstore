import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent {
  public checkoutButton: string;
  constructor(private location: Location) {
    this.checkoutButton = 'Checkout';
  }

  goBack(): void {
    this.location.back();
  }

  displayContent = false;
}
