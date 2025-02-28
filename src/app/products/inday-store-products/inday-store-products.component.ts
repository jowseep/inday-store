import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-inday-store-products',
  imports: [],
  templateUrl: './inday-store-products.component.html',
  styleUrl: './inday-store-products.component.css'
})
export class IndayStoreProductsComponent implements OnInit {
  product = new Product();

  constructor() {
  }

  ngOnInit(): void {
  }

}
