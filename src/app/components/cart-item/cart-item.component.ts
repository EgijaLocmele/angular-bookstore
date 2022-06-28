import { Component, Input } from '@angular/core';

import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass'],
})
export class CartItemComponent {
  @Input() product!: Product;
}
