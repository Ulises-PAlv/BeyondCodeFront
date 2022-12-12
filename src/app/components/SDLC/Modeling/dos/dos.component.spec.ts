import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOSComponent } from './dos.component';

describe('DOSComponent', () => {
  let component: DOSComponent;
  let fixture: ComponentFixture<DOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
