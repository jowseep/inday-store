import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Borrower } from '../borrower.model';
import { BorrowerService } from '../borrower.service';

@Component({
  selector: 'app-inday-store-borrowers',
  imports: [AgGridAngular],
  templateUrl: './inday-store-borrowers.component.html',
  styleUrl: './inday-store-borrowers.component.css'
})
export class IndayStoreBorrowersComponent implements OnInit {
  borrowerList: Borrower[] = [];
  colDefs: ColDef[] = [];
  
  constructor(private readonly borrowerService: BorrowerService) {
  }

  ngOnInit(): void {
    this.setBorrowerList();
    this.getColDefs();
  }

  private setBorrowerList(): void {
    this.borrowerService.getBorrowerList()
    .subscribe(data => {
      this.borrowerList = data;
    });
  }

  private getColDefs(): void {
    this.colDefs = [
      { field: "id" },
      { field: "first" },
      { field: "last" },
      { field: "phone" }
    ];
    this.colDefs.forEach(col => console.log("Column Name:", col.field));
  }
}
