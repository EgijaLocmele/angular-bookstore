import { Component } from '@angular/core';
import { ProductData } from '../../mock-products';
import { Product } from '../../product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  products: Product[] = ProductData;

  constructor() {}
}
