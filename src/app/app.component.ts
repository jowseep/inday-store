import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndayStoreNavbarComponent } from "./shared/inday-store-navbar/inday-store-navbar.component";
import { Product } from './products/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IndayStoreNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inday-store';
}
