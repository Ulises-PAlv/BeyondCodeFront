import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectiveComponent } from './perfective.component';

describe('PerfectiveComponent', () => {
  let component: PerfectiveComponent;
  let fixture: ComponentFixture<PerfectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
