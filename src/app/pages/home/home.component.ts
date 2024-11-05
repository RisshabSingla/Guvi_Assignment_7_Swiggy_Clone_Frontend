import { Component } from '@angular/core';
import { dummyFoodItems } from '../../dummyItemsList';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    foodItems = dummyFoodItems;
}
