import { Component, inject, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction.model';
import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDialog } from '@angular/material/dialog';
import { IndayStoreAddTransactionComponent } from '../inday-store-add-transaction/inday-store-add-transaction.component';

@Component({
  selector: 'app-inday-store-transactions',
  imports: [AgGridAngular],
  templateUrl: './inday-store-transactions.component.html',
  styleUrl: './inday-store-transactions.component.css'
})
export class IndayStoreTransactionsComponent implements OnInit {
  transactionList: Transaction[] = [];
  colDefs: ColDef[] = [];
  readonly dialog = inject(MatDialog);

  constructor(private readonly transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.setTransactionList();
    this.getColDefs();
  }

  addTransaction(): void {
    const dialogRef = this.dialog.open(
      IndayStoreAddTransactionComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog is closed ', result);
    });
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
