import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COUComponent } from './cou.component';

describe('COUComponent', () => {
  let component: COUComponent;
  let fixture: ComponentFixture<COUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
