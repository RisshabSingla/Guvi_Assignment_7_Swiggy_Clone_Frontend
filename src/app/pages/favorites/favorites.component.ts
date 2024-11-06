import { Component, OnInit } from '@angular/core';
import { FavoritesService, FavoriteItem } from '../../services/favorites.service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favoriteItems: FavoriteItem[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {
    this.favoritesService.favoriteItems$.subscribe(items => {
      this.favoriteItems = items;
    });
  }

  removeFromFavorites(id: string) {
    // Find the item to remove based on id and remove it
    const itemToRemove = this.favoriteItems.find(item => item.id === id);
    if (itemToRemove) {
      this.favoritesService.toggleFavorite(itemToRemove);
    }
  }
}