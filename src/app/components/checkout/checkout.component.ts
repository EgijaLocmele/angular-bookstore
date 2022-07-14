import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
})
export class CheckoutComponent implements OnInit {
  public orderButton: string;
  constructor(private location: Location) {
    this.orderButton = 'Order';
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {}
}
