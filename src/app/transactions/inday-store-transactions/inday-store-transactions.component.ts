import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-inday-store-transactions',
  imports: [AgGridAngular],
  templateUrl: './inday-store-transactions.component.html',
  styleUrl: './inday-store-transactions.component.css'
})
export class IndayStoreTransactionsComponent implements OnInit {
  transactionList: Transaction[] = [];
  colDefs: ColDef[] = [];

  constructor(private readonly transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.setTransactionList();
    this.getColDefs();
  }

  private getColDefs(): void {
    this.colDefs = [
      { field: "id" },
      { field: "borrowerName" },
      { field: "amount" },
      { field: "date" },
      { field: "products" }
    ]
  }

  private setTransactionList(): void {
    this.transactionService.getTransactionList()
    .subscribe(data => {
      this.transactionList = data;
    })
  }
}
