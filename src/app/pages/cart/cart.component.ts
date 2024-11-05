import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
      this.cartService.cartItems$.subscribe(items => {
          this.cartItems = items;
      });
  }

  removeItem(id: string) {
      this.cartService.removeFromCart(id);
  }

  decreaseQuantity(id: string) {
      this.cartService.decreaseQuantity(id);
  }
}
