import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inday-store-add-transaction',
  imports: [ReactiveFormsModule],
  templateUrl: './inday-store-add-transaction.component.html',
  styleUrl: './inday-store-add-transaction.component.css'
})
export class IndayStoreAddTransactionComponent {
  addTransactionForm = new FormGroup({
    borrower: new FormControl(''),
    item: new FormControl('')
  });

  submit() {
    console.log(this.addTransactionForm.value);
  }
}
