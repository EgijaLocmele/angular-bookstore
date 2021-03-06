import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.sass'],
})
export class ProductListItemComponent {
  @Input() product!: Product;
}
