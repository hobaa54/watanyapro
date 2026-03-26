import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo20Component } from './cairo20.component';

describe('Cairo20Component', () => {
  let component: Cairo20Component;
  let fixture: ComponentFixture<Cairo20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
