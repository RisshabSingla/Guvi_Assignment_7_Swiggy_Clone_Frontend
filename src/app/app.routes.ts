import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  {path:'order', component: OrderComponent},
  { path: '**', redirectTo: '/home' }, 
];

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
})
export class AppRoutingComponent {}
