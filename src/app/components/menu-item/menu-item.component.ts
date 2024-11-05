import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
    @Input({required:true}) imageSrc!: string;
    @Input({required:true}) itemName!: string;

    constructor(private router: Router) {}

    navigateToOrder(){
      this.router.navigate(['/order']);
    }
}
