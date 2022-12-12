import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityFixComponent } from './priority-fix.component';

describe('PriorityFixComponent', () => {
  let component: PriorityFixComponent;
  let fixture: ComponentFixture<PriorityFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
