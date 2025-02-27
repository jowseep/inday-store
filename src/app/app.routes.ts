import { Routes } from '@angular/router';
import { IndayStoreDashboardComponent } from './dashboard/inday-store-dashboard/inday-store-dashboard.component';
import { IndayStoreTransactionsComponent } from './transactions/inday-store-transactions/inday-store-transactions.component';
import { IndayStoreProductsComponent } from './products/inday-store-products/inday-store-products.component';

export const routes: Routes = [
    { path: 'dashboard', component: IndayStoreDashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
    { path: 'transactions', component: IndayStoreTransactionsComponent },
    { path: 'products', component: IndayStoreProductsComponent }
];
