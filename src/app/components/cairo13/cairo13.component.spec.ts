import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo13Component } from './cairo13.component';

describe('Cairo13Component', () => {
  let component: Cairo13Component;
  let fixture: ComponentFixture<Cairo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
