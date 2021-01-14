import { Component, OnInit } from '@angular/core';

import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-product',  // necessary only if this component will be used as nested component
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []  // to register service with a Component Injector
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[];
  errorMessage: string;

  private productService: ProductService;

  constructor(productService: ProductService) {
    // do dependency injection in constructor
    this.productService = productService;

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // retrieve data
  ngOnInit(): void {
    console.log('onInit');

    this.productService.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      (error) => (this.errorMessage = error)
    );

  }

  performFilter(listFilter: string): IProduct[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.products.filter((product) => product.productName.toLocaleLowerCase().includes(listFilter));
  }

  onRatingClicked(message: string): void {
      this.pageTitle = message; 
  }
}
