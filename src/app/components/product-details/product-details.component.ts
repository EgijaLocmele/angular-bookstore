import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { Product } from 'src/app/product';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: Product;
  public addButton: string;

  constructor(
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.addButton = 'Add to cart';
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  openDialog() {
    this.matDialog.open(DialogWindowComponent, {
      height: 'auto',
      width: '95vw',
    });
  }
}
