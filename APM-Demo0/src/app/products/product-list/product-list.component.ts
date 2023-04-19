import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store } from '@ngrx/store';
import { State } from '../state/product.reducer';

import * as ProductActions from '../state/product.actions';
import * as ProductSelector from '../state/product.selectors';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private productService: ProductService, private store: Store<State>) { }

  ngOnInit(): void {
    // TO-DO: Unsubscribe
    this.store.select(ProductSelector.getCurrentProduct).subscribe(currentProduct => {
      this.selectedProduct = currentProduct;
    });

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: err => this.errorMessage = err
    });

    //TO-DO: Unsubscribe
    this.store.select(ProductSelector.getShowProductCode).subscribe(showProductCode => {
        this.displayCode = showProductCode;
    });
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode())
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductActions.initCurrentProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(ProductActions.setCurrentProduct({ product }));
  }

}
