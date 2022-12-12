import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumIComponent } from './forum-i.component';

describe('ForumIComponent', () => {
  let component: ForumIComponent;
  let fixture: ComponentFixture<ForumIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
