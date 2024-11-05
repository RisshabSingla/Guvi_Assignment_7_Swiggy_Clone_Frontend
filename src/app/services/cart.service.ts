import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  foodItemName: string;
  imageSource: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(cartItem => cartItem.id === item.id);

    if (itemIndex > -1) {
      currentItems[itemIndex].quantity += item.quantity;
    } else {
      currentItems.push(item);
    }
    this.cartItems.next(currentItems);
  }

  getCartItems() {
    return this.cartItems.value;
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
