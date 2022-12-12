import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionedComponent } from './versioned.component';

describe('VersionedComponent', () => {
  let component: VersionedComponent;
  let fixture: ComponentFixture<VersionedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
