import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductData } from 'src/app/mock-products';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  getProducts(): Observable<Product[]> {
    const products = of(ProductData);
    return products;
  }

  getProduct(id: number): Observable<Product> {
    const product = ProductData.find((x) => x.id === id)!;
    return of(product);
  }
}
