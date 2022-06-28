import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Products } from '../product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItems: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems.length;
    this.cartService.cartChanged.subscribe((product: Products[]) => {
      this.cartItems = product.length;
    });
  }
}
