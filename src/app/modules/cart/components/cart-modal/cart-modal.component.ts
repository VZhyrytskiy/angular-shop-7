import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Product } from '../../../products/models/product';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartModalComponent implements OnInit {

  cartList: Product[];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {}

  getProductsFromCart(): Product[] {
    return this.cartService.getCartList();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  onDeleteProduct(product: Product): void {
    this.cartService.deleteProduct(product);
  }

  onIncreaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  order(): void {
    alert(`Your order price is: $${this.getCartTotal()}`);
    this.cartService.cleanCart();
  }
}
