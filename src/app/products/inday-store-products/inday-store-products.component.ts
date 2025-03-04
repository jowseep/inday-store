import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ProductService } from '../product.service';

@Component({
  selector: 'app-inday-store-products',
  imports: [AgGridAngular],
  templateUrl: './inday-store-products.component.html',
  styleUrl: './inday-store-products.component.css'
})
export class IndayStoreProductsComponent implements OnInit {
  productList: Product[] = [];
  colDefs: ColDef[] = [];

  constructor(private readonly productService: ProductService) {
  }

  ngOnInit(): void {
    this.setProductList();
    this.getColDefs();
  }

  private setProductList(): void {
    this.productService.getProductList()
    .subscribe(data => {
      this.productList = data;
    });
  }

  private getColDefs(): void {
    this.colDefs = [
      { field: "id" },
      { field: "name" },
      { field: "price" }
    ]
  }
}
