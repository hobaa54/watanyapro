import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo9Component } from './cairo9.component';

describe('Cairo9Component', () => {
  let component: Cairo9Component;
  let fixture: ComponentFixture<Cairo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
