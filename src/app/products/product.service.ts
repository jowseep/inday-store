import { Injectable } from "@angular/core";
import { Product, PRODUCTS } from "./product.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor() {}

    getProductList(): Observable<Product[]> {
        return of(PRODUCTS);
    }

    getProductById(id: number): Observable<Product | undefined> {
        return of(PRODUCTS.find(product => product.id === id));
    }
}