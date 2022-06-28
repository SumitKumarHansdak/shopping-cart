import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { InventoryService } from '../inventory.service';
import { Products } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Products[];
  //index: number;

  constructor(
    private inventoryService: InventoryService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.inventoryService.getProducts();
  }

  onAddToCart(index: number) {
    this.cartService.addToCart(this.products[index]);
  }
}
