import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo1Component } from './cairo1.component';

describe('Cairo1Component', () => {
  let component: Cairo1Component;
  let fixture: ComponentFixture<Cairo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
