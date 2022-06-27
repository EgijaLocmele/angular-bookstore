import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.sass'],
})
export class DialogWindowComponent {
  public toCart: string;
  public continueShopping: string;

  constructor() {
    this.toCart = 'Go to cart';
    this.continueShopping = 'Continue to shop';
  }
}
