import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndayStoreAddTransactionComponent } from './inday-store-add-transaction.component';

describe('IndayStoreAddTransactionComponent', () => {
  let component: IndayStoreAddTransactionComponent;
  let fixture: ComponentFixture<IndayStoreAddTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndayStoreAddTransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndayStoreAddTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
