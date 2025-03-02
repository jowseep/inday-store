import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndayStoreBorrowersComponent } from '../inday-store-borrowers.component';

describe('IndayStoreBorrowersComponent', () => {
  let component: IndayStoreBorrowersComponent;
  let fixture: ComponentFixture<IndayStoreBorrowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndayStoreBorrowersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndayStoreBorrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
