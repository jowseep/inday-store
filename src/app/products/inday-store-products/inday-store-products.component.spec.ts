import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndayStoreProductsComponent } from './inday-store-products.component';

describe('IndayStoreProductsComponent', () => {
  let component: IndayStoreProductsComponent;
  let fixture: ComponentFixture<IndayStoreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndayStoreProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndayStoreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
