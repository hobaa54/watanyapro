import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cairo35Component } from './cairo35.component';

describe('Cairo35Component', () => {
  let component: Cairo35Component;
  let fixture: ComponentFixture<Cairo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cairo35Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cairo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
