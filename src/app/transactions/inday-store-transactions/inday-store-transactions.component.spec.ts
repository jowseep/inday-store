import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndayStoreTransactionsComponent } from './inday-store-transactions.component';

describe('IndayStoreTransactionsComponent', () => {
  let component: IndayStoreTransactionsComponent;
  let fixture: ComponentFixture<IndayStoreTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndayStoreTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndayStoreTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
