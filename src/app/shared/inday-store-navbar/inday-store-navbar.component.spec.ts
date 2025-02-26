import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndayStoreNavbarComponent } from './inday-store-navbar.component';

describe('IndayStoreNavbarComponent', () => {
  let component: IndayStoreNavbarComponent;
  let fixture: ComponentFixture<IndayStoreNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndayStoreNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndayStoreNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
