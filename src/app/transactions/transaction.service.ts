import { Injectable, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Transaction, TRANSACTIONS } from "./transaction.model";

@Injectable({
    providedIn: 'root'
})
export class TransactionService implements OnInit {
    
    ngOnInit(): void {
    }

    getTransactionList(): Observable<Transaction[]> {
        return of(TRANSACTIONS);
    }

    getProductById(id: number): Observable<Transaction | undefined> {
        return of(TRANSACTIONS.find(transaction => transaction.id === id));
    }
}