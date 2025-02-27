import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndayStoreDashboardComponent } from './inday-store-dashboard.component';

describe('IndayStoreDashboardComponent', () => {
  let component: IndayStoreDashboardComponent;
  let fixture: ComponentFixture<IndayStoreDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndayStoreDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndayStoreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
