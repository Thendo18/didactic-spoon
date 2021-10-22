import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanABudgetComponent } from './plan-a-budget.component';

describe('PlanABudgetComponent', () => {
  let component: PlanABudgetComponent;
  let fixture: ComponentFixture<PlanABudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanABudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanABudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
