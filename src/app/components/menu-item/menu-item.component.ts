import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service'; 

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
    @Input({required:true}) imageSrc!: string;
    @Input({required:true}) itemName!: string;
    @Input({required: true}) orderPage!: boolean;
    @Input({required: true}) id!: string

    itemQuantity: number = 1;

    constructor(private router: Router, private cartService: CartService) {}

    navigateToOrder(){

      if(!this.orderPage){
        console.log("Hello")
        this.router.navigate(['/order']);
      }
    }

    addToCart(event: Event) {
    event.stopPropagation();

    const cartItem: CartItem = {
      id: this.id,
      foodItemName: this.itemName,
      imageSource: this.imageSrc,
      quantity: this.itemQuantity
    };
    console.log(cartItem)
    this.cartService.addToCart(cartItem);
    console.log(`Added ${this.itemName} to cart with quantity: ${this.itemQuantity}`);
    console.log(this.cartService.getCartItems())
  }
}
