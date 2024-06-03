import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledRevenueDetailComponent } from './scheduled-revenue-detail.component';

describe('ScheduledRevenueDetailComponent', () => {
  let component: ScheduledRevenueDetailComponent;
  let fixture: ComponentFixture<ScheduledRevenueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledRevenueDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledRevenueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
