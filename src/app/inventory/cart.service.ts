import { EventEmitter, Injectable } from '@angular/core';
import { Products } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartChanged = new EventEmitter<Products[]>();

  cartItems: Products[] = [];
  product: Products;
  cartNumber: number = 0;

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: Products) {
    this.product = {
      id: item.id,
      name: item.name,
      description: item.description,
      imagePath: item.imagePath,
    };
    this.cartItems.push(this.product);
    this.cartChanged.emit(this.cartItems.slice());
    this.cartNumber++;
  }
}
