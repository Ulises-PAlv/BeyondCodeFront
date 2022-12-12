import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOStateComponent } from './dostate.component';

describe('DOStateComponent', () => {
  let component: DOStateComponent;
  let fixture: ComponentFixture<DOStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
