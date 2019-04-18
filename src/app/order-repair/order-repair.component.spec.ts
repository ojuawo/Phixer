import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRepairComponent } from './order-repair.component';

describe('OrderRepairComponent', () => {
  let component: OrderRepairComponent;
  let fixture: ComponentFixture<OrderRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
