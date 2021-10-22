import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetPlanComponent } from './add-budget-plan.component';

describe('AddBudgetPlanComponent', () => {
  let component: AddBudgetPlanComponent;
  let fixture: ComponentFixture<AddBudgetPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBudgetPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
