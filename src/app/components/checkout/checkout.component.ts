import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
})
export class CheckoutComponent implements OnInit {
  public orderButton: string;
  constructor() {
    this.orderButton = 'Order';
  }

  ngOnInit(): void {}
}
