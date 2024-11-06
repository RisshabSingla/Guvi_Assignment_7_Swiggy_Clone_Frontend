import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  foodItemName: string;
  imageSource: string;
  quantity: number;
  price: number;
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

  removeFromCart(id: string) {
    const currentItems = this.cartItems.value.filter(item => item.id !== id);
    this.cartItems.next(currentItems);
  }

  decreaseQuantity(id: string) {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(item => item.id === id);

    if (itemIndex > -1) {
      if (currentItems[itemIndex].quantity > 1) {
        currentItems[itemIndex].quantity--;
      } else {
        currentItems.splice(itemIndex, 1);
      }
      this.cartItems.next(currentItems);
    }
  }

  increaseQuantity(id: string) {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(item => item.id === id);

    if (itemIndex > -1) {
      currentItems[itemIndex].quantity++;
      this.cartItems.next(currentItems);
    }
  }

  getCartItems() {
    return this.cartItems.value;
  }

  clearCart() {
    this.cartItems.next([]);
  }
}