import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  productsList: Product[];

  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsList = this.productService.getProducts();
  }
}
